'use strict';

const fs = require('fs');
const reset = require('./reset');
const myFile = './text.txt';
// const append = require('./add');
// const read = require('./list');

const remove = function (number) {
  let listContent = fs.readFileSync(myFile, 'UTF-8');
  let listLineArray = listContent.split('\n');
  console.log('ListLine Array: ', listLineArray);

  if (listLineArray.length == 0) {
    console.log('The list is empty!');
  } else if (number >= 0 && number < listLineArray.length) {
    listLineArray.splice(number, 1);
    reset();
    listLineArray.forEach(item => {
      fs.appendFileSync(myFile, item + '\n');
    });
  } else {
    console.log('Wrong index number!');
  }
};

module.exports = remove;