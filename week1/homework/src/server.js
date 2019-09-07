
'use strict';

const http = require('http');

function printData(state, response) {
  response.writeHead(200, {
    'Content-Type': 'application/json'
  });
  let json =
  response.write(JSON.stringify({
    'state': state
  }));
}

function createServer(port) {
  let state = 10;

  const server = http.createServer((req, response) => {
    if (req.url == '/state') {
      printData(state, response);
    }
    else if (req.url == '/add') {
      state += 1;
      printData(state, response);
    }
    else if (req.url == '/subtract') {
      state -= 1;
      printData(state, response);
    }
    else if (req.url == '/reset') {
      state = 10;
      printData(state, response);
    }
    else {
      response.writeHead(404, {
        'Content-Type': 'application/json'});
      response.write(JSON.stringify({
        'error': 'Not found'
      }));
    }
    response.end();
  });

  return server;
}

module.exports = {createServer};
