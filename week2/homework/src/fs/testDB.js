'use strict';
const fs = require('fs');
// TODO: Write the homework code in this file
function Help() {
  console.log(`
  node index.js help                 Shows help section
  node index.js list                 Shows an appropriate text if there are no to-dos
  node index.js add "Buy groceries"  Adds a to-do item
  node index.js remove 2             Remove second item
  node index.js reset                Removes all to-do items from the list
  `);
}
function readFile() {
  return new Promise(resolve =>
    fs.readFile('./TodoList.txt', 'utf8', (err, data) => resolve(err ? '' : data)),
  );
}
function appendFile(...text) {
  return new Promise((resolve, reject) =>
    fs.appendFile('./TodoList.txt', `${text.join(' ')}\n`, (err, data) =>
      err ? reject(err) : resolve(data),
    ),
  );
}

function Remove(number) {
  let listContent = fs.readFileSync('./TodoList.txt', 'UTF-8');
  let listLineArray = listContent.split('\n');

  if (listLineArray.length == 0) {
    console.log('The list is empty!');
  } else if (number >= 0 && number < listLineArray.length) {
    listLineArray.splice(number, 1);

    listLineArray.forEach(item => {
      fs.appendFileSync('./TodoList.txt', item + '\n');
    });
  } else {
    console.log('You entered a wrong index number!');
  }
}
function reset() {
  fs.unlink('./TodoList.txt', function (err) {
    if (err) throw err;
    else console.log('File deleted!');
  });
}

const cmd = process.argv[2];
const args = process.argv.slice(3);
switch (cmd) {
  case 'help':
    Help();
    break;

  case 'list':
    readFile().then(data => console.log(`To-Dos:\n${data}`));
    break;

  case 'add':
    appendFile(...args)
      .then(() => console.log('Wrote to-do to file'))
      .then(() => readFile())
      .then(data => console.log(`\nTo-Dos:\n${data}`))
      .catch(console.error);
    break;

  case 'remove':
    Remove(args);
    readFile().then(data => console.log(`To-Dos:\n${data}`));
    // .then(data => console.log(`To-Dos:\n${data}`));
    break;

  case 'reset':
    reset();
    break;
}
/*
{ id: 1, description: 'Wake Up' },
  { id: 2, description: 'Brush Teeth' },
  { id: 3, description: 'Drunk Coffee' },

*/