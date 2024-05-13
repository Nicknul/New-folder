let fs = require('fs');
let http = require('http');
let html = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>pokemon</title>
 
</head>
  <body>
    <div id="root"></div>
    <script src="pokemon.js"></script>
  </body>
</html>
`;


//* 이거는 파일을 만드는 메소드
fs.writeFile('pokemon.html', html, function (){});

//* 서버가 있어야 해당 파일을 보내줄수 있어요.
//* 서버를 만드는 함수에요.
http.createServer((req, res) => {

  //* 브라우저에서 해당 서버를 접속할 때 파일들을 요청해요.
  //* req => request.
 
  //* 처음 요청할때 "/"로 브라우저가 자동으로 요청해요
  //* 좀있다 다른 화면으로 보여드릴게요.
  //* 이 때 Html파일을 보내주면 되요.
  if(req.url == "/"){
    //* 이제 우리는 파일을 읽어서 브라우저한테 보내줘야 합니다.

    //* 파일 위치
    let path = "pokemon.html"

    //* 매개변수로, 파일 위치와 콜백함수가 필요해요.
    fs.readFile(path, (err,data) => {

      //* 파일을 읽지 못해서 에러날 떄. 해당 조건문으로 이동합니다.
      //* res는 response의 줄임말이에요. 응답을 뜻합니다.
      if(err){
        res.writeHead(500);
        res.end("File Error");
        return
      }

      //* 에러가 나지 않았을 경우 
      else{
        //* 여기서 숫자 200은 응답이 잘 됬다는 뜻입니다.
        //* mdn statuscode 검색하시면 나오실거에요.
        //* content-type은 해당 파일이 html이라고 알려주는 거에요.
        res.writeHead(200, {'Content-Type' : 'text/html'})

        //* data는 path위치에 있는 html파일이라고 생각하시면 되요.
        res.end(data);
      }
    })
  }
    //* 두 번쨰로는 조건문으로 js파일에 대한 요청을 응답해야합니다.
    //* 브라우저가 html을 읽을 떄, 위에서 아래로 읽게 될텐데.
    //* 브라우저는 pokemon-1.js 파일을 가지고 있지 않기 때문에
    //* 해당 <script> 항목을 만나면 서버에거 해당 js파일을 요청하게 되요.

  //* 브라우저로 부터의 해당 js요청.
  if(req.url == "/pokemon.js"){

      let path = "pokemon.js";

      //* 위에서 똑같이 파일을 읽어서 응답해 줍시다.
      fs.readFile(path, (err, data) => {
        //* 에러처리
        if(err){
          res.writeHead(500);
          res.end("File Error");
          return;
        }

        else{
          //* 해당 파일이 자바스크립트라고 명시해줍시다.
          //* 명시를 안해주면 브라우저는 모릅니다.
          res.writeHead(200, {'Content-Type' : 'application/javascript'})
          res.end(data);
        }
      })
    }
  
  //* 아까 /data.json을 붙여주었기 때문에 해당 조건문으로 넘어가게 됩니다.
  if(req.url == "/data.json")
  {
    let path = "pokemonNames.json";

    //* 똑같이 파일을 읽어 클라이언트에게 넘겨줍시다.
    fs.readFile(path, (err,data) => {
      if(err){
        res.writeHead(500);
        res.end("File Error");
      }

      else{
        res.writeHead(200, {'Content-Type' : 'application/json'})
        res.end(data);
      }
    })
  }

  if(req.url == "/favicon.ico"){
    return;
  }

}).listen(8000, () => {
  console.log("서버 잘 열림");
  console.log("서버 주소는: http://localhost:8000");
});