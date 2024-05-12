let fs = require('fs');
let http = require('http');
let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokemon Random</title>
</head>
<body>
  <div id="root"></div>
  <button id="button">당신은 포켓몬은 뭘까요~?</button>

  <script src="style.js" type="module">

  </script>
  
</body>
</html>`;

fs.writeFile('pokemonRandom.html', html, function(){});
http.createServer((req, res) => {
  if(req.url == "/") {
    let path = "pokemonRandom.html"

    fs.readFile(path, (err,data) => {
      if(err){
        res.writeHead(500);
        res.end("File Error");
        return
      } else {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
      }
    })
  }
  if(req.url == "/style.js"){
    let path = "style.js";

    fs.readFile(path, (err, data) => {
      if(err) {
        res.writeHead(500);
        res.end("File Error");
        return
      } else {
        res.writeHead(200, {'Content-Type' : 'application/javascript'});
        res.end(data);
      }
    })
  }
  if(req.url == "/data.json") {
    let path = "pokemonNames.json"
    fs.readFile(path, (err, data) => {
      if(err) {
        res.writeHead(500);
        res.end("File Error");
      } else {
        res.writeHead(200, {'Contetn-Type' : 'application/json'});
        res.end(data);
      }
    })
  }
  if(req.url == "/favicon.ico"){
    return
  }
}).listen(3000, () => {
  console.log('서버 돌아가는 중!');
  console.log("http://localhost:3000");
})

