'use strict';

// TODO: Write the homework code in this file
const Express = require('express');
const app = new Express();
// todos/:id
const {
  createTodo,
  readTodo
} = require('./actions');
/** markAsDone,
  markAsNotDone,
  clearTodo/ */
const Todo = require('./todo');
const FileName = 'todos.json';
const TodoSlug = 'todos';
const todo = new Todo(FileName);
app.use(Express.json());

app.post(`/${TodoSlug}`, createTodo.bind(null, todo));
app.get(`/${TodoSlug}`, readTodo.bind(null, todo));
/*
app.put(`/${TODO_SLUG}/:id`, updateTodo.bind(null, todo));
app.delete(`/${TODO_SLUG}/:id`, deleteTodo.bind(null, todo));*/


const PORT = 3000;
app.listen(PORT, err => {
  if (err)
    return console.error(err);

  console.log(`Server started on http://localhost:${PORT}`);
});
//
/*
/const data = [1, 2, 3];
app.get('/', function (req, res) {// get all data
  //res.writeHead(200, { 'Content-Type': 'application/json' });
  res.send('Hello Server');
});
/*app.get('/GET/todos', function (req, res) {// get all data
  //res.writeHead(200, { 'Content-Type': 'application/json' });
  res.send(data);
});*/
/*app.get("/url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});*/
