const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if(req.method === "GET") {
    // console.log("유효성 검사:", req.url)
    if(req.url === "/") {
      const first = fs.readFileSync('./public/index.html', 'utf-8')

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(first);
      res.end();
    }
    if(req.url === "/index.css") {
      const first = fs.readFileSync('./public/index.css', 'utf-8')

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css');
      res.write(first);
      res.end();
    }
    if(req.url === "/index.js") {
      const first = fs.readFileSync('./public/index.js', 'utf-8')

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/javascript');
      res.write(first);
      res.end();
    }
  }
})

const port = 3000;

server.listen(port, (err) => {
  if(err) {
    console.error("Error");
  } else {
    console.log("서버 돌아가는중");
    console.log(`http://localhost:${port}`)
  }
})