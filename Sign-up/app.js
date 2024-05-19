const http = require('http');
const fs = require('fs')
const qs = require('node:querystring')

const server = http.createServer((req, res) => {
  if(req.method === "GET") {
    // console.log("유효성 검사:" + req.url)
    if(req.url === "/") {
      const first = fs.readFileSync('./public/signUp.html', 'utf-8')

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html')
      res.write(first);
      res.end()
    }
    if(req.url === "/signUp.css") {
      const first = fs.readFileSync('./public/signUp.css', 'utf-8')

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css')
      res.write(first);
      res.end()
    }
    if(req.url === "/signUp.js") {
      const first = fs.readFileSync('./public/signUp.js', 'utf-8')

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/javascript')
      res.write(first);
      res.end()
    }
    if(req.url.startsWith("/signup")) {
      const text = req.url.split("?")[1]
      const data = qs.decode(text)
      console.log(data)

      // const array = [];
      // array.push(data);
      // console.log(array);
    }
  }
})

const port = 3000

server.listen(port, (err) => {
  if(err) {
    console.log("Error");
  } else {
    console.log("Server Loading");
    console.log(`http://localhost:${port}`)
  }
})