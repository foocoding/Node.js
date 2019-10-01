'use strict';

// TODO: Write the homework code in this file
const list = require('./list');
const append = require('./add');
const reset = require('./reset');
const remove = require('./remove');
const update = require('./update');
const help = require('./help');

switch (process.argv[2]) {
  case 'help':
  case '/':
  default:
    help();
    break;

  case 'list':
    list().then(data => {
    });
    break;
  case 'add':
    append(...process.argv.slice(3))
      .then(() => list())
      .then(data => {
        console.log(`Item ${process.argv[3]} added`);
        console.log(`\nThings to do:\n${data}`);
      })
      .catch(console.error);
    break;

  case 'remove':
    const index = process.argv[3];
    remove(index);
    list().then(data => {
      console.log(`Index: ${index} have removed`);
    });
    break;

  case 'reset':
    reset();
    console.log('Data is Empty');
    break;
}