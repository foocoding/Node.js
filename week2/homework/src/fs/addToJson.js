const fs = require('fs');
const myFile = './words.json';
let words = fs.readFileSync(myFile);
let fd;
let dataToAppend = {
  word: "red-color",
  code: 8
}
function appendFile() {
  fs.readFile(myFile, 'utf8', function readFileCallback(err, data) {
    try {
      fd = fs.openSync(myFile, 'a');
      words = JSON.parse(data); //now it an object  
      fs.appendFileSync(fd, JSON.stringify(dataToAppend), 'utf8');
      console.log("added")
    } catch (err) {
      //Handle the error
    } finally {
      if (fd !== undefined)
        fs.closeSync(fd);
    }
  })
}


//module.exports = appendFile;