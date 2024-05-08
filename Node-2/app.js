// const http = require('http');
// console.log(http);
// console.table(http);

// const server = http.createServer();

// ? 요청과 응답을 어떻게 처리 할 것인가?
// * 무슨 기능을 넣을 것인가?
// * 문서를 보낼까?
// * 데이터를 보낼까?

// const server = http.createServer();

// Listen to the request event
// server.on('request', (request, res) => {
//   res.writeHead(200, { 'Content-Type': "text/html" });
//   res.end(
//     `<html>
//       <body>
//         <h1>hello</h1>
//       </body>
//     </hteml>`
//   );
// });

// server.listen(8000);

// * HTML 생성하자
const fsHTML = require('fs');
// * HTML 구성요소
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>a</title>
</head>
<body>
  <div id="root"></div>

  <script src = "server.js">


  </script>  
</body>
</html>`
// * fsHTML 호출
fsHTML.writeFile("a.html", html, function(){});

// * server.js 생성
const fsJs = require('fs');
//  * server.js 호출
fsJs.writeFile("server.js","", function(){});