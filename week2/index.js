'use strict';

const fs = require('fs');
let myList = fs.readFileSync('list.txt', 'utf8').split('\n').filter(i => i.length >= 1);
let action = process.argv[2];
let listItem = process.argv[3];

function helpMe() {
  fs.readFile('help.txt', 'utf8', (err, help) => {
    if (err) {
      console.log('Could not help you');
    }
    console.log(help);
  });
}

function addTask(list, task) {
  fs.appendFile('list.txt', task + '\n', 'utf8', err => {
    if (err) {
      throw err;
    } else {
      console.log(`added ${task} to list`);
    }
  });
}

function removeTask(list, task) {
  list.splice((task - 1), 1);
  let splited = list.join('\n') + '\n';
  console.log(`${task} was removed from list`);
  fs.writeFile('list.txt', splited, function(err) {
    if (err) {
      throw err;
    }
  });
}

function resetList() {
  fs.writeFile('list.txt', '', err => {
    if (err) console.log('Can not reset now..');
    console.log('You have no more tasks');
  });
}
function showList(list) {
  console.log(list);
}

function whatDoYouWantToDo() {
  if (action === 'help') {
    helpMe();
  }
  if (action === 'add') {
    addTask(myList, listItem);
  }
  if (action === 'remove') {
    removeTask(myList, listItem);
  }
  if (action === 'reset') {
    resetList();
  }
  if (action === 'list') {
    showList(myList);
  }
}
whatDoYouWantToDo();
