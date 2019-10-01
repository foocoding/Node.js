'use strict';

const fs = require('fs');
const myFile = './toDos.json';
let obj = {
  "id": 4,
  "task": "Drink Coffee",
  "done": false,
  "dueDate": "today"
};


function add() {
  fs.readFile(myFile, (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
  });
  let data = JSON.stringify(obj);
  fs.writeFileSync(myFile, data);
}
add();


/*

function add(task, due) {
  fs.exists(myFile, function (exists) {
    if (exists) {
      console.log("yes file exists");
      fs.readFile(myFile, function readFileCallback(err, data) {
        if (err) {
          console.log(err);
        } else {
          obj = JSON.parse(data);
          for (i = 0; i < 10; i++) {
            obj.push({ id: i, task, due });
          }
          var json = JSON.stringify(obj);
          fs.writeFile(myFile, json);
        }
      });
    } else {
      console.log("file not exists")
      for (i = 0; i < 10; i++) {
        obj.table.push({ id: i, task, due });
      }
      var json = JSON.stringify(obj);
      fs.writeFile(myFile, json);
    }
  });
}
*/

module.exports = add;