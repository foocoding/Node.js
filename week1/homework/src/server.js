  
'use strict';

const http = require('http');

function createServer(port) {
  let state = 10;

  function resWrite () { 
    res.write(JSON.stringify({
    'state': state
  }))
}

  const server = http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'app/json'
    });
    switch (req.url) {
      case '/state':
    resWrite() 
        break;
      case '/add':
        state += 1;
       resWrite();
        break;
      case '/subtract':
        state -= 1;
      resWrite();
        break;
      case '/reset':
        state = 10;
      resWrite()
        break;
      
      default:
        response.writeHead(404, {
          'Content-Type': 'app/json'
        });
        response.write(JSON.stringify({
          'error': 'Not found'
        }));
    };
    response.end();
  }
}
  
  return server;
}

module.exports = {createServer};