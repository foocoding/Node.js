'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */

function createServer(port) {
  let state = 10;
  function showResponseToClient(response, state) {
    response.setHeader('Content', 'application/json');
    response.write(JSON.stringify(state));
    response.end();
  }

  const server = http.createServer((request, response) => {
    // TODO: Write your homework code here
    switch (request.url) {
      case '/state':
        showResponseToClient(response, { state });
        break;
      case '/add':
        state++;
        showResponseToClient(response, { state });
        break;
      case '/subtract':
        state--;
        showResponseToClient(response, { state });
        break;
      case '/reset':
        state = 10;
        showResponseToClient(response, { state });
        break;
      default:
        response.statusCode = 404;
        showResponseToClient(response, { error: 'Not found' });
    }
  });

  return server;
}

module.exports = { createServer };
