'use strict';

function markAsDone(todo, request, response) {
  const id = request.params.id;
  todo.done(id)

    .then(todo => {
      response.status(200);
      response.json({ todo });
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = markAsDone;
