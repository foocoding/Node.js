
'use strict';

const http = require('http');

function createServer(port) {
  let state = 10;

  const server = http.createServer((req, response) => {
    function printData() {
      response.writeHead(200, {
        'Content-Type': 'application/json'
      });
      let json = JSON.stringify({
        'state': state
      });
      response.write(json);
    }

    if (req.url == '/state') {
      printData();
    }
    else if (req.url == '/add') {
      state += 1;
      printData();
    }
    else if (req.url == '/subtract') {
      state -= 1;
      printData();
    }
    else if (req.url == '/reset') {
      state = 10;
      printData();
    }
    else {
      response.writeHead(404, {
        'Content-Type': 'application/json'});
      let json = JSON.stringify({
        'error': 'Not found'
      });
      response.write(json);
    }
    response.end();
  });

  return server;
}

module.exports = {createServer};
