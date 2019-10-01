'use strict';

// TODO: Write the homework code in this file
const fs = require('fs');
const myFile = './toDos.json';
const enCoding = 'utf8';
// list  readFile
function readFile() {
  return new Promise(resolve => {
    fs.readFile(myFile, enCoding, (err, data) => {
      if (err) console.log(`Error message: ${err.message}`);
      console.log(resolve(data));
    });
  });
}
//addFile
//remove        Removes a to-do item by its 1-base index, e.g
//reset         Removes all to-do items from the list:
//update 

//

// 

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
// main menu

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
    console.log('add here');

    break;
  case 'remove':
    console.log('remove here');
    break;
  case 'reset':
    //resetFile().then(data => { });
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
