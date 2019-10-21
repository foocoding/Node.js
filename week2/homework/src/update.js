'use strict';

const fs = require('fs');
const reset = require('./reset');
const myFile = './text.txt';
// const append = require('./add');
// const read = require('./list');

const update = function (number, value) {
  let listContent = fs.readFileSync(myFile, 'UTF-8');
  let listLineArray = listContent.split('\n');
  console.log('ListLine Array: ', listLineArray);

  if (listLineArray.length == 0) {
    console.log('The list is empty!');
  } else if (number >= 0 && number < listLineArray.length) {
    listLineArray.splice(number, 1);
    //update the value here 
    //here
    listLineArray.forEach(item => {
      fs.appendFileSync(myFile, item + '\n');
      console.log('this line', listLineArray);
    });
  } else {
    console.log('Wrong index number!');
  }
};
console.log(update(1));
module.exports = update;