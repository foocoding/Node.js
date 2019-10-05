'use strict';

// TODO: Write the homework code in this file
const express = require('express');
const app = new express();

app.use(express.json());
//app.use(bodyParser.json());

const { readTodo,
  writeFile
} = require('./todo')

app.use(function (req, res, next) {
  console.log('Incoming Request');
  next();
});

// Error handling in json format
app.use((error, req, res, next) => {
  res.status(500).send({ error });
});

app.get('/', (req, res) => { res.send('Home Page'); });
app.get('/todos', (req, res, next) => {
  readTodo()
    .then(data => {
      res.json({ todos: data });
      //res.json(data);
      res.end();
    })
    .catch(err => next(err));
});

app.get('/todos/:id', (req, res, next) => {
  const getId = req.params.id;
  readTodo()
    .then(data => {
      const showTodo = data.find(function (item) {
        //if (getID !== item.id) { alert('data not found';)}else 
        return item.id == getId;
      })
      res.json({ todos: showTodo });

      res.end();
    })
    .catch(err => next(err));
});
//delete all
app.delete('/todos', (req, res, next) => {
  readTodo()
    .then(todos => {
      const newTodo = [];
      writeFile(newTodo)
        .then(() => res.send(`File is empty`))
        .catch(err => next(err));
    });
});
//delete id
/*app.delete('/todos/:id', (req, res, next) => {
  const removeId = req.params.id;
  readTodo().then(todos => {
    const newTodo = data.find(function (item) {
      //if (getID !== item.id) { alert('data not found';)}else 
      return item.id == removeId;
    })
    writeFile(newTodo)
      .then(() => res.send(`Removed ${removeId}`))
      .catch(err => next(err));
  });
})
*/
//markAsDone
app.put('/todos/:id/done', (req, res, next) => {
  const getId = req.params.id;
  readTodo()
    .then(data => {
      const doneTodo = data.find(function (item) {
        //if (getID !== item.id) { alert('data not found';)}else 
        return item.id == getId;
      })
      doneTodo.done = true;
      return writeFile(data);
    })
    .then(() => res.send(`Updated status Done for id no.: ${getId}`))
    .catch(err => next(err));
});
//MarkAsNotDone
app.put('/todos/:id/notdone', (req, res, next) => {
  const getId = req.params.id;
  readTodo()
    .then(data => {
      const doneTodo = data.find(function (item) {
        //if (getID !== item.id) { alert('data not found';)}else 
        return item.id == getId;
      })
      doneTodo.done = false;
      return writeFile(data);
    })
    .then(() => res.send(`Updated status Not Done for id no.: ${getId}`))

    .catch(err => next(err));
});

const PORT = 3000;
app.listen(PORT, error => {
  if (error)
    return console.error(error);
  console.log(`Server started on http://localhost:${PORT}`);
})
