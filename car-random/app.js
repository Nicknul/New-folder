const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if(req.method === "GET") {
    if(req.url === '/') {
      const first = fs.readFileSync("./public/index.html", "utf-8")

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html")
      res.write(first)
      res.end()
    }
    if(req.url === '/index.js') {
      const first = fs.readFileSync("./public/index.js", "utf-8")

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/javascript")
      res.write(first)
      res.end()
    }
  }
})

server.listen(8000, (err) =>{
  if(err) {
    console.log("Error")
  } else {
    console.log("server loading")
    console.log("http://localhost:8000")
  }
})