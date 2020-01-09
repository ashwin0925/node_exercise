// form data

// const http = require('http')
// const qs = require('querystring')
// http.createServer((req, res) =>
// {
//   var store = '';
//   req.on('data', (chunk) =>
//   {
//     store = store + chunk;
//   })
//   req.on('end', () =>
//   {
//     var parse = qs.parse(store)
//     console.log(parse.name)
//     res.end(store);
//   })
//   }).listen(3000)

// JSON Data
// const http = require('http')
// http.createServer((req, res) =>
// {
//   var store = '';
//   req.on('data', (chunk) =>
//   {
//     store = store + chunk;
//   })
//   req.on('end', () =>
//   {
//     var parse = JSON.parse(store); 
//     console.log(parse)
//     res.end(store);
//   })
//   }).listen(3000)



const http = require('http')
const qs = require('querystring')
var store = '';
http.createServer((req, res) =>
{
  req.on('data', (chunk) =>
  {
    store = store + chunk;
  })

  req.on('end', () =>
  {
    if(req.url === '/json')
    {
    var parse = JSON.parse(store); 
    console.log(parse.age)
    } else if(req.url === '/form')
    {
        var parse = qs.parse(store); 
        console.log(parse.name)
    res.end(store);
  }
})
}).listen(3000)