const http = require('http')
const qs = require('querystring')
const fs = require('fs')


const server = http.createServer((req, res) => {
  var store = '';
  req.on('data', (chunk) => {
    store = store + chunk
  })
  req.on('end',() => {
    if(req.url === '/form' && req.method === 'GET') {
      fs.createReadStream('./index.html').pipe(res)
    }
    else if(req.url === '/form' && req.method === 'POST') {
      var parseData = qs.parse(store)
      console.log(parseData.name)
      console.log(parseData.email)
      res.end(store)
    }
    else {
      res.statusCode === 404;
      res.end('Page not found')
    }
  })
})

server.listen(3000, () => {
  console.log('server on port 3000')
})