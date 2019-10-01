const fs = require('fs');
const myFile = './text.txt';

//read file to see the last Item. 
fs.readFile(myFile, 'utf8', (err, data) => {
  if (err) console.log('Error message: ${err.message}');
  console.log(data);
});

const getFileUpdatedItem = (myFile, (err, data) => {
  if (err) console.log('Error message: ${err.message}');
  console.log(data);
  const stats = fs.statSync(myFile)
  console.log('stats ', stats);
  return stats.mtime
})
console.log('get File Updated ', getFileUpdatedItem);
/*
const fs = require('fs')
const getFileUpdatedDate = (path) => {
  const stats = fs.statSync(path)
  return stats.mtime
}
*/
