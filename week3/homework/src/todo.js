'use strict';
const fs = require('fs');
const uuid = require('uuid/v4');


const default_encoding = 'utf8';
const FileName = 'todos.json';
let words;
const exists = fs.existsSync(FileName);
if (exists) {
  // Read the file
  console.log('loading file todos');
  const txt = fs.readFileSync(FileName, default_encoding);
  // Parse it  back to object
  words = JSON.parse(txt);
} else {
  // Otherwise start with blank list
  console.log('No words');
  words = {};
}

function readTodo() {
  return new Promise(resolve => {
    fs.readFile(FileName, default_encoding, (error, data) => {
      if (error)
        return resolve([]);
      return resolve(JSON.parse(data));
    });
  });
}

function writeFile(data) {
  return new Promise((resolve, reject) =>
    fs.writeFile(FileName, JSON.stringify(data), (err, data) =>
      err ? reject(err) : resolve(data)
    )
  );
}

module.exports = {
  readTodo,
  writeFile
};
