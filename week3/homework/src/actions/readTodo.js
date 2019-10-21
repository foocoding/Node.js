'use strict';

function readTodo(todo, request, response) {
  const id = request.params.id;
  todo.readById(id)
    .then(todo => {
      response.json({ todo });
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = readTodo;
