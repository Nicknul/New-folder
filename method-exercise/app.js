const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');

const server = http.createServer((request, response) => {
  if(request.method === "POST") {
    console.log("요청 URL 검사 :", request.url);
    if(request.url === "/") {

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      const htmlData = fs.readFileSync("./public/post.html", "utf8");  
      response.write(htmlData);
      response.end();
    }
    if(request.url.startsWith("/test")) {
      const text = request.url.split("?")[1];
      const data = qs.decode(text);
      const name = data.fileName;
      const content = data.fileContent;
      
      fs.writeFile(`${name}.txt`, content,(err) => {
        if(err) {
          console.log("File Error")
        }
      })
    }
  }
});

const PORT = 3000;
server.listen(PORT, function(err) {
  if(err) {
    console.log(err);
  }
  console.log("서버 돌아감");
  console.log(`http://localhost:${PORT}`);
})