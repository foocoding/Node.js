'use strict';
const fs = require('fs');

function help() {
  return new Promise(resolve =>
    fs.readFile('./help.txt', 'UTF-8', (err, data) => resolve(err ? '' : console.log(data)))
  );
};

module.exports = help;