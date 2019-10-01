'use strict';
const fs = require('fs');
const myFile = './toDos.json';

fs.readFile(myFile, 'utf8', (err, data) => {
  if (err) {
    console.log("Error reading file from disk:", err)
    return
  }
  try {
    const toDoList = JSON.parse(data)
    console.log("To Do List here :", toDoList)

    console.log('Error parsing JSON string:', err)
  }
  catch (err) {
    console.log('Error parsing JSON string:', err)
  }
})
