
'use strict';

const http = require('http');

function createServer(port) {
  let state = 10;

  const server = http.createServer((req, response) => {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    if (req.url == '/state') {
      let json = JSON.stringify({
        'state': 10
      });
      response.write(json);
    }
    if (req.url == '/add') {
      state += 1;
      let json = JSON.stringify({
        'state': state
      });
      response.write(json);
    }
    if (req.url == '/subtract') {
      state -= 1;
      let json = JSON.stringify({
        'state': state
      });
      response.write(json);
    }
    if (req.url == '/reset') {
      state = 10;
      let json = JSON.stringify({
        'state': state
      });
      response.write(json);
    }
    if (req.url == '/multi2') {
      state *= 2;
      let json = JSON.stringify({
        'state': state
      });
      response.write(json);
    }
    // if (req.ur == '/div2') {
    //   state /= 2;
    //   let json = JSON.stringify({
    //     'state' : state
    //   });
    //   response.write(json);
    // }
    // else {
    //   response.writeHead(404, {
    //     'Content-Type': 'application/json'});
    //   let json = JSON.stringify({
    //     error: 'Not Found'
    //   });
    //   response.write(json);
    // }

    // eslint-disable-next-line no-undef
    response.end();
  });

  return server;
}

module.exports = {createServer};
