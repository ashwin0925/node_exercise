// var http = require('http');

// http.createServer((req, res) => {
// res.end('i am starting a server')
// }).listen(3001);

// http = require('http');
 
// var port = 8081;
 
// var s = http.createServer();
// s.on('request', function(request, response) {
//     response.writeHead(200);
//     console.log(request.method);
//     console.log(request.headers);
//     console.log(request.url);
//     response.write('hi');
//     response.end();
// });
 
// s.listen(port);
// console.log('Browse to http://127.0.0.1:' + port);

// var http = require('http');
// var port = 3000;
// var hostname = 'localhost' || '127.0.0.1'
// http.createServer((req, res) => {
//   res.end('i am new server')
// }).listen(port, hostname);

// var http = require('http');
// http.createServer((req, res) => {
//   res.write('hello World'),
//   res.end()
// }).listen(7000)


// var http = require('http');
// http.createServer((req, res) => {
//   console.log(req.headers);
//   console.log(req.url);
//   console.log(req.method)
//   res.write('hello World'),
//   res.end()
//  }).listen(7000)

// var http = require('http');
// http.createServer((req,res)=>{
//   res.statusCode
// })

// var http = require('http');
// var server = http.createServer(handleRequest)
// server.listen(4000)

// function handleRequest(req, res) {
//   res.writeHead(200,{
//     'Content-type': 'text/html'
//   })
// res.write('<h1>server started</h1>'),
// res.end()
// }

// var http = require('http');
//  var server = http.createServer(handleRequest)
//  server.listen(4000)

//  function handleRequest(req, res) {
//    if(req.url === '/'){
//      res.end('hello this is home')
//    }
//    else if(req.url === '/about'){
//      res.end('this is info')
//    }
//   }

// const url = require('url')
// const adr = `/users?email=nodeserver@gmail.com`
// console.log(url.parse(adr))