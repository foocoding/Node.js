const fs = require('fs');
const myFile = './text.txt';


let fd;
let dataToAppend = {
  name: 'red',
  code: 8
};

try {
  fd = fs.openSync(myFile, 'a');
  fs.appendFileSync(fd, dataToAppend, 'utf8');
} catch (err) {
  /* Handle the error */
} finally {
  if (fd !== undefined)
    fs.closeSync(fd);
}
