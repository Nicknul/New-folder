const fs = require('fs');
const http = require('http');
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>messenger</title>
 
</head>
  <body>
    <div id="root">
      <button id="button">추가!</button>
      <input id="input" tpye="text">
    </div>    
    

    <script src="style.js"></script>
  </body>
</html>`;

fs.writeFile('messenger.html', html, function(){});

const server = http.createServer((req, res) => {
  //* 서버 요청할 때 HTML를 요청
  if(req.url == '/') {
    let path = "messenger.html"
    fs.readFile(path, (err,data) => {
      if(err) {
        res.writeHead(500);
        res.end("File Error");
      } else {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.end(data)
      }
    })
  }
  //* 요청이 완료된 HTML 파일 안에 js 파일을 요청
  if(req.url == "/style.js") {
    let path = "style.js";
    fs.readFile(path, (err, data) => {
      if(err) {
        res.writeHead(500)
        res.end("File Error")
      } else {
        res.writeHead(200, {'Content-Type' : 'application/javascript'})
        res.end(data)
      }
    })
  }
});

server.listen(3001, () => {
  console.log("서버 잘 열림");
  console.log("서버 주소는 : http://localhost:3001")
})