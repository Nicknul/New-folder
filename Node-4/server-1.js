const http = require('http');

const server = http.createServer((req, res) => {
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write("<div></div>");
  res.end('hello world');
});

server.listen(3000, () => {
  console.log('http://localhost:3000')
})