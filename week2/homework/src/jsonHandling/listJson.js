'use strict';

const fs = require('fs');
const myFile = './toDos.json';

function readFile() {
  return new Promise(resolve => {
    try {
      fs.readFile(myFile, 'utf8', function (err, data) {
        if (err) throw err;
        resolve(data);
        const toDoList = JSON.parse(data)
        console.log("To Do List here: \n", toDoList)
      })
    }
    catch (err) {
      resolve(err);
      console.log('Error parsing JSON string:', err)
    }
  })
}

module.exports = readFile;
/*
const read = function() {
    return new Promise(resolve =>
        fs.readFile('./toDoList.txt', 'UTF-8', (err, data) => {
            resolve(err ? '' : data);
        })
    );
};

*/