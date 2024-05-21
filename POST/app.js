const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
  if(req.method === "POST") {
    if(req.url === '/') {
      console.log("유효성 검사:"+req.url)
    }
  }
})

const port = 3000;

server.listen(port, (err) => {
  if(err) {
    console.error("Error");
  } else {
    console.log("Server loading");
    console.log(`http://localhost:${port}`)
  }
})