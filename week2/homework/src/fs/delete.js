const fs = require('fs');
const myFile = './words.json';
let words = fs.readFileSync(myFile);
let data = JSON.parse(words);
console.log(data);
//where to delete

