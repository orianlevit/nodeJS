
// #1: handle with files
var fs = require('fs');
// write:
fs.writeFileSync('core.txt', 'corn is good!');
// read:
console.log(fs.readFileSync('core.txt').toString());

// #2: fix path:
var path = require('path');
var websiteHome = 'Desktop/Oliver//theshow/index.html'
console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteHome));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteHome));

// #3: Interval:
setInterval(function (){console.log('LA');}, 2000);


// #4: Current Path and File Name:
console.log(__dirname);
console.log(__filename);