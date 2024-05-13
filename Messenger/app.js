const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  if(req.method === "GET") {
    if(req.url === "/") {
      const first = fs.readFileSync("./public/home.html", "utf8");
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(first);
      res.end();
    }
    if(req.url === "/messengerStyle.css") {
      const first = fs.readFileSync("./public/messengerStyle.css", "utf8");
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
      res.write(first);
      res.end();
    }
    if(req.url === "/messenger.js") {
      const first = fs.readFileSync("./public/messenger.js", "utf8");
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      res.write(first);
      res.end();
    }
    if(req.url === "/messenger.html") {
      const second = fs.readFileSync("./public/messenger.html", "utf8");
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(second);
      res.end();
    }
    if(req.url === "/home.html") {
      const second = fs.readFileSync("./public/home.html", "utf8");
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(second);
      res.end();
    }
  }
});

server.listen(8001);