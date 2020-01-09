const http = require('http')
const url = require('url')
const fs = require('fs')
var path = require('path')
var userPath = path.join(__dirname,'users');

const server = http.createServer(onRequest);

function onRequest(req, res) {
  var parsedUrl = url.parse(req.url, true);
  var store = '';
  req.on('data', (chunk) => {
    store = store + chunk
  })
  req.on('end',() => {
    if(parsedUrl.pathname === '/users' && req.method === 'POST')
    {
      var username = JSON.parse(store).username;

      fs.open(userPath + '/' + username +'.json', 'wx', (err,fd) => {
        if(err) return res.end('could not found');

        fs.writeFile(fd, store, (err) =>{
          if(err) return res.end('not found');

          fs.close(fd, (err) => {
            if(err) return res.end('not found');
            res.end(username + ' create successfully');
          })
        })
      })
    }
    else if(parsedUrl.pathname === '/users' && req.method === 'PUT')
    {
      var username = JSON.parse(store).username;

      fs.open(userPath + '/' + username +'.json', 'r+', (err,fd) => {
        if(err) return res.end('not found a file');

        fs.ftruncate(fd, (err) => {
          if(err) return res.end('file not found');

          fs.writeFile(fd, store, (err) => {
            if(err) return res.end('not found');

            fs.close(fd, (err) => {
              if(err) return res.end('not found a file');
              res.end(username + ' Updated successfully')
            })
          })
        })
      })

    }
    else if(parsedUrl.pathname === '/users' && req.method === 'DELETE')
    {
      var username = JSON.parse(store).username;

      fs.unlink(userPath + '/' + username +'.json', (err) => {
        if(err) return res.end('not found a file');
        res.end(username + ' Deleted successfully')
      })

    }
    else if(parsedUrl.pathname === '/users' && req.method === 'GET')
    {
      var username = JSON.parse(store).username;
      fs.readFile(userPath + '/' + username +'.json',(err) => {
        if(err) return res.end('not found a file');
        res.end(username + ' Read successfully')
      })
    }
    else {
      res.statusCode === 404;
      res.end('Page not found')
    }
  })
}
server.listen(4001, () => {
  console.log('server started')
})