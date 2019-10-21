// TODO: Write the homework code in this file
const fs = require('fs');
const myFile = './text.txt';

fs.unlink(myFile, err => {
  if (err) console.log(`Error message: ${err.message}`);
  console.log('delete complete');
});
/*
fs.readFile(myFile, 'utf8', (err, data) => {
  if (err) console.log('Error message: ${err.message}');
});
fs.unlink(path, (err) => {
  if (err) {
    console.error(err)
    return
  }
*/
