'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function showResponseToClient(response, state, statusCode) {
  response.statusCode = statusCode;
  response.setHeader('Content-Header', 'application/json');
  response.write(JSON.stringify(state));
  response.end();
}

function createServer(port) {
  let state = 10;
  // const handleError = require('error-handler');
  // const statusCode = handleError(async() => {});

  const server = http.createServer((request, response, statusCode, message) => {
    // TODO: Write your homework code here
    switch (request.url) {
      case '/state':
        // response.statusCode = 200;
        showResponseToClient(response, { state }, 200);
        break;
      case '/add':
        state++;
        // response.statusCode = 200;
        showResponseToClient(response, { state }, 200);
        break;
      case '/subtract':
        state--;
        // eslint-disable-next-line no-trailing-spaces
        // response.statusCode = 200;
        showResponseToClient(response, { state }, 200);
        break;
      case '/reset':
        state = 10;
        // response.statusCode = 200;
        showResponseToClient(response, { state }, 200);
        break;
      default:
        // response.statusCode = 404;
        showResponseToClient(response, { error: 'Not found' }, 404);
    }
  });

  return server;
}

module.exports = {
  createServer
};
