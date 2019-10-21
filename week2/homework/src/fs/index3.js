'use strict';

// TODO: Write the homework code in this file
const fs = require('fs');
const myFile = './text.txt';
const enCoding = 'utf8';

function readFile() {
  return new Promise(resolve => {
    fs.readFile(myFile, enCoding, (err, data) => {
      if (err) console.log(`Error message: ${err.message}`);
      console.log(resolve(data));
    });
  });
}

function appendFile(...text) {
  return new Promise((resolve, reject) => {
    fs.appendFile(myFile, `${text.join(' ')}\n`, (err, data) => {
      if (err) reject(`Error message: ${err.message}`);
      resolve(data);
    });
  });
}
function resetFile() {
  return new Promise((resolve, reject) => {
    fs.writeFile(myFile, '', err => {
      if (err) console.log(`Error message: ${err.message}`);
      console.log('Reset Completed');
    });
  });
}


function printHelp() {
  console.log(`Usage: node index.js [options]

HackYourFuture Node.js Week 2 - Homework To-Do App

Options:

  help          show this help text
  list          Shows current to-dos, or shows an appropriate text if there are no to-dos
  add           Adds a to-do item
  remove        Removes a to-do item by its 1-base index, e.g
  reset         Removes all to-do items from the list:
  update        Updates a to-do item with new text

  `);
}

/* Or we could destructure the array instead
 * const [,, cmd, ...args] = process.argv;
 */
const cmd = process.argv[2];
const args = process.argv.slice(3);
console.log('args', args);

switch (cmd) {
  case 'list':
    readFile().then(data => {
      console.log(`To-Dos:\n${data}`);
    });
    break;
  case 'add':
    appendFile(...args)
      .then(() => console.log('Wrote to-do to file'))
      .then(() => readFile())
      .then(data => console.log(`\nTo-Dos:\n${data}`))
      .catch(console.error);
    break;
  case 'remove':
    console.log('remove here');
    break;
  case 'reset':
    resetFile().then(data => { });
    console.log('The file is emptied now');
    break;
  case 'update':
    console.log('update here');
    break;

  case 'help':
  default:
    printHelp();
    break;
}
