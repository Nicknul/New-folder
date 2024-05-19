console.log('helle 정호연');

// let name = '정호연';

// console.log('hello' + name);

let http = require('http'); // '문서를 교환하겠다' 라는 약속

let mainDocument = ` 
<html>
  <body>
  <h1>hello</h1>
  <script>
    alert('hello;);
  </script>
  </body>
</html>`;
// 문서의 정의를 만나게 되면 alert 기능을 하게 된다.

function testServer(request, response){ //request : 요청, response : 응답
  response.statusCode = 200;
  response.setHeader('Content-Type', "text/html");
  response.write(mainDocument);
  response.end(); 
}

const server = http.createServer(testServer);
// 1. 나 http에 있는 함수를 가져다가 쓸게, 점을 쓰면 객체라는 것을 확신할 수 있다. -> 변수에 할당했다.

server.listen(3001, function() { // port (항구) : 3000
  console.log("서버 잘 돌아가!")
  console.log("http://localhost:3001");
}) // 요청이 온다면 받아주겠다. 들어주겠다.