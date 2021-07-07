// //the following has been imported from https://date-fns.org/ and import with const

// const { format, formatDistance, formatRelative, subDays } from 'date-fns'

// function hello() {
//   const now= new Date()
//   format(now(), "'Today is a' iiii")
//   //=> "Today is a Sunday"

//   formatDistance(subDays(new Date(), 3), now())
//   //=> "3 days ago"

//   formatRelative(subDays(new Date(), 3), now())
//   //=> "last Friday at 7:26 p.m."
//   console.log('Hello World');
// }
// hello()

//creating a server:
var http = require('http'); //

//create a server object:
function createServer() {
  const server = http.createServer(function(req, res) {
    //creates a function called http that has a response and request parameter
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  });
  server.listen(8080); //the server object listens on port 8080. Once the server is created, is says: listen to port 8080

  console.log('service started on http://localhost:8080');
}
createServer();

//*******************
//creating a json

// function createServer() {
//   const server = http.createServer(function (req, res) {
//     if (req.url == "/hello"{
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.write(JSON.stringify({ greeting: "Hello World!" })); //write a response to the client
//       res.end(); //end the response
//   }else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.write(JSON.stringify({ error: "Error" })); //write a response to the client
//   }
//   res.end(); //end the response
// })
//     server.listen(8080); //the server object listens

//   //console.log('service started on http://localhost:8080');
// }
// createServer();
