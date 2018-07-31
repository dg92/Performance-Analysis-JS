const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const {range} = require('lodash');

const {checkPerformance} = require('./formulas');

const dataPoints = [process.argv[2]];

function op(v) {
    return Promise.resolve(exec(`npm run seed ${v}`).then(() => {
        readDataFile().then(posts => {
            // range(0, 200).map(i => {
                checkPerformance(posts);
            // });
        });
    }));
}

function readDataFile() {
    return new Promise((res, rej) => {
        fs.readFile('data.js', 'utf8', (err, data) => {
            if(err) {
                return res(JSON.parse([]));
            } else {
                return res(JSON.parse(data));
            }
        });
    })
}

function batchReduce(items, batchSize=10, op) {
    const reducer = (i) => {
        const batch = items.slice(i, i+batchSize);
        return batch.length > 0 ? op(batch).then(() => reducer(i+batchSize)) : 
            Promise.resolve();
    };
    return reducer(0);
}
  

batchReduce(dataPoints, 1, op);