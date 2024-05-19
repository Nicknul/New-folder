const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if(req.method === "GET") {
    if(req.url === '/') {
      const first = fs.readFileSync("./public/index.html", "utf-8");
      
      res.statusCode = 200;
      res.setHeader('Constent-Type', 'text/html, charset=utf-8');
      res.write(first);
      res.end();
    }
    if(req.url === '/all.css') {
      const first = fs.readFileSync("./public/all.css", "utf-8");
      
      res.statusCode = 200;
      res.setHeader('Constent-Type', 'text/css, charset=utf-8');
      res.write(first);
      res.end();
    }
    if(req.url === '/all.js') {
      const first = fs.readFileSync("./public/all.js", "utf-8");
      
      res.statusCode = 200;
      res.setHeader('Constent-Type', 'text/javascript, charset=utf-8');
      res.write(first);
      res.end();
    }
    if(req.url === '/index.html') {
      const first = fs.readFileSync("./public/index.html", "utf-8");
      
      res.statusCode = 200;
      res.setHeader('Constent-Type', 'text/html, charset=utf-8');
      res.write(first);
      res.end();
    }
    if(req.url === '/normal.html') {
      const type = fs.readFileSync("./public/types/normal.html", "utf-8");
      
      res.statusCode = 200;
      res.setHeader('Constent-Type', 'text/html, charset=utf-8');
      res.write(type);
      res.end();
    }
    if(req.url === '/fire.html') {
      const type = fs.readFileSync("./public/types/fire.html", "utf-8");
      
      res.statusCode = 200;
      res.setHeader('Constent-Type', 'text/html, charset=utf-8');
      res.write(type);
      res.end();
    }
    if(req.url === '/water.html') {
      const type = fs.readFileSync("./public/types/water.html", "utf-8");
      
      res.statusCode = 200;
      res.setHeader('Constent-Type', 'text/html, charset=utf-8');
      res.write(type);
      res.end();
    }
    if(req.url === '/grass.html') {
      const type = fs.readFileSync("./public/types/grass.html", "utf-8");
      
      res.statusCode = 200;
      res.setHeader('Constent-Type', 'text/html, charset=utf-8');
      res.write(type);
      res.end();
    }
    if(req.url === '/electric.html') {
      const type = fs.readFileSync("./public/types/electric.html", "utf-8");
      
      res.statusCode = 200;
      res.setHeader('Constent-Type', 'text/html, charset=utf-8');
      res.write(type);
      res.end();
    }
    if(req.url === '/dataKo.json') {
      const data = fs.readFileSync("./data/pokemonNamesKo.json");
      res.statusCode = 200;
      res.setHeader('Constent-Type', 'application/json, charset=utf-8');
      res.write(data);
      res.end();
    }
    if(req.url === '/dataEn.json') {
      const data = fs.readFileSync("./data/pokemonNamesEn.json");
      res.statusCode = 200;
      res.setHeader('Constent-Type', 'application/json, charset=utf-8');
      res.write(data);
      res.end();
    }
    if(req.url === '/normal.js') {
      const type = fs.readFileSync("./public/types/normal.js", "utf-8");
      
      res.statusCode = 200;
      res.setHeader('Constent-Type', 'application/javascript, charset=utf-8');
      res.write(type);
      res.end();
    }
    if(req.url === '/allTypes.css') {
      const type = fs.readFileSync("./public/types/allTypes.css", "utf-8");
      
      res.statusCode = 200;
      res.setHeader('Constent-Type', 'text/css, charset=utf-8');
      res.write(type);
      res.end();
    }
  }
})

server.listen(8080, function(){
  console.log('서버 돌아가는 중');
  console.log('http://localhost:8080')
});