const fs = require('fs');
const myFile = './text.txt';

function reset() {
  fs.writeFile(myFile, '', err => {
    if (err) console.log(`Error message: ${err.message}`);
    // console.log('Done Reset');
  })
}



/*
var fs = require('fs')
fs.truncate('/path/to/file', 0, function(){console.log('done')})
*/
/*
const reset = function() {
  fs.unlink(myFile, function(err) {
    if (err) throw err;
  });
};
*/

module.exports = reset;
