const { error } = require('console');
let fs = require('fs');
let http = require('http');

var server = http.createServer(function (req,res){
  if (req.url == '/' || req.url == '/home') {
      fs.readFile('./public/Home.html','utf-8', function (err,data){
          if (err){
            res.writeHead(404, { "content-Type": 'text/html' })
            res.write('file not found'+err)
            res.end('');
          } else {
            res.writeHead(200, { "content-Type": 'text/html' })
            res.write(data)
            res.end('');
          }
      })
  } else if (req.url === '/about') {
    fs.readFile('./public/About.html', 'utf-8', function (err, data) {
      if (err) {
        res.writeHead(404, { "content-Type": 'text/html' })
        res.write("file not found: " +err)
        res.end();
      } else {
        res.writeHead(200, { "content-Type": 'text/html' })
        res.write(data)
        res.end();
      }
    })

  } else if (req.url === '/service') {
    fs.readFile('./public/service.html', 'utf-8', function (err, data) {
      if (err) {
        res.writeHead(404, { "content-Type": 'text/html' })
        res.write("file not found:"+err)
        res.end('');
      } else {
        res.writeHead(200, { "content-Type": 'text/html' })
        res.write(data)
        res.end('');
      }
    })

  } else if (req.url === '/portfolio') {
    
    fs.readFile('./public/portfolio.html', 'utf-8', function (err, data) {
      if (err) {
        res.writeHead(404, { "content-Type": 'text/html' })
        res.write("file not found"+err)
        res.end('');
      } else {
        res.writeHead(200, { "content-Type": 'text/html' })
        res.write(data)
        res.end();
      }
    })

  }
});
server.listen(3000);
console.log("server listening start...");