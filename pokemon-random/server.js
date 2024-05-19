const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  if(req.method === "GET") {
    if(req.url === '/') {
      const first = fs.readFileSync("./pokemonRandom.html", "utf-8")

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html')
      res.write(first)
      res.end()
    }
    if(req.url === "/style.js") {
      const first = fs.readFileSync("./style.js", "utf-8")

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/javascript')
      res.write(first)
      res.end()
    }
    if(req.url === "/data.json") {
      const data = fs.readFileSync("./pokemonNames.json")

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json')
      res.write(data)
      res.end()
    }
  }
})

server.listen(3000, (err) => {
  if(err) {
    console.log('File Error')
  } else {
    console.log('Server loading')
    console.log('http://localhost:3000')
  }
})