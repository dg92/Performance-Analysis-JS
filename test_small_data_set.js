const fs = require('fs');
const {checkPerformance} = require('./formulas');

fs.readFile('data.js', 'utf8', (err, data) => {
  if(err) {
    console.log('read failed');
    process.exit();
  } else {
    const posts = JSON.parse(data).slice(0, 5);
    checkPerformance(posts).then(() => {
      console.log('Performance Analysis Done For Small Data Set!');
      process.exit();
    }) 
  }
});
