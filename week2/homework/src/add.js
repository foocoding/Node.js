'use strict';

const fs = require('fs');
const myFile = './text.txt';

function add(...element) {
  return new Promise((resolve, reject) =>
    fs.appendFile('./text.txt', `${element.join(' ')}\n`, (err, data) =>
      err ? reject(err) : resolve(data)
    )
  );

}


module.exports = add;