const fs = require('fs');
const {
    range,
    random
  } = require('lodash');
  
const max = process.argv[2] ? process.argv[2] : 100000;
  
const posts = range(0, Number(max)).map((p, i) => {
    return {
        id: i,
        votes: p+random(0, 500),
        downvotes: p+random(0, 500),
        commentCount: random(0, 1000)
    }
    });
fs.writeFile(`data.js`, JSON.stringify(posts, null, 4), 'utf8', (err, res) => {
    process.exit();
});
