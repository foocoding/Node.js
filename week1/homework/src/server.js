'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    switch (request.url) {
      case '/state':
        response.write(JSON.stringify({ state: state }));
        break;
      case '/add':
        state += 1;
        response.write(JSON.stringify({ state: state }));
        break;
      case '/substract':
        state -= 1;
        response.write(JSON.stringify({ state: state }));
        break;
      case '/reset':
        response.write(JSON.stringify({ state: state }));
        break;
      default:
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ error: 'Not found' }));
    }
    response.end();
  });

  return server;
}

module.exports = {
  createServer,
};
