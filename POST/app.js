const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    //! 요청한 메서드가 'GET'이고
    if (req.url === '/') {
      //! 요청한 메서드의 url이 '/'이 맞다면
      fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
          //? 파일을 읽을 때, path.join()이 에러가 난다면
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          //? 라이트헤드를 응답해줘, 응답 코드는 500, 글씨는 글자로만 나오게 해줘.
          res.end('500 code는 서버 자체의 에러');
          //? 응답이 끝날 때 괄호 안에 있는 문장을 띄워줘.
          return;
          //? 반환한다는 뜻도 있지만, 만약 error가 맞다면 거기서 멈춰달라는 뜻으로 해석된다.
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        //? 응답 에러가 아니라면, 응답 코드는 200, html타입으로 나타나게 해줘.
        res.end(data);
        //? 응답 마지막에는 data가 들어가게 해줘.
      });
    } else {
      //! 요청한 url이 '/'가 아니라면
      res.writeHead(404, { 'Content-Type': 'text/plain, charset=utf-8' });
      //? 헤드쓰기를 응답해줘, 응답 코드는 404, 콘텐츠 타입은 글자로만 나타나게 해줘.
      res.end('404 code는 페이지를 찾을 수 없음');
      //? 응답이 끝날 때 괄호 안에 있는 문장을 띄워줘.
    }
  } else if (req.method === 'POST') {
    //! 요청한 메서드가 'GET'이 아니라, 'POST'이고
    //? html에 있는 form의 method가 POST
    if (req.url === '/submit') {
      //! 요청한 메서드의 url이 '/submit'가 맞다면
      //? form 안에 있는 input type="submit"를 전송했을 때의 url이지 않을까?
      let body = '';
      //? 변수 body를 선언할게, 변수 body의 초기값은 빈 문자열이야.
      req.on('data', (chunk) => {
        //? on === addEventListener 느낌 -> 요청한 data가 on(들어온다면) 실행해줘
        //? on('data')는 세트
        body += chunk.toString();
        //? 들어온 data를 문자열로 변환 후 쪼개서 body(빈 문자열)에 하나씩 넣어줘(+=).
      });
      req.on('end', () => {
        //? 위에 data 받기가 다 끝났다면 on 이벤트를 실행해줘.
        const parsedData = new URLSearchParams(body);
        //? 변수 parsedDate를 선언 = POST에 분석할 문자열을 가져와줘
        const title = parsedData.get('title');
        //? title 변수 = 분석한 문자열에 있는 'title' 문자열을 값을 가져와줘 ex) title=내보내기
        //* body에 있는 title는 html에 있는 제목 input의 value, ex) title=정호연
        const content = parsedData.get('content');
        //? content 변수 = 분석한 문자열에 있는 'content' 문자열의 값을 가져와줘 ex) content=성공
        //* body에 있는 content는 html에 있는 내용 input의 value, ex) content=배고프다
        const jsonData = {
          title: title,
          content: content,
        };
        //? 변수 jsonData 선언하고 객체로 만들어 줌
        //? 항목 이름 : title, 항목의 값 : 변수 title의 값
        const jsonDataString = JSON.stringify(jsonData, null, 2);
        //? jsonDataString 변수를 선언
        //? 변수의 할당 값 = json의 형태의 문자열로 바꿔줘 (변수 jsonData의 객체 안에 있는 데이터를)
        fs.writeFile(path.join(__dirname, 'data.json'), jsonDataString, (err) => {
          //? 파일을 써줘(생성해줘)(경로를 합쳐줘(현재 디렉토리의 경로에 'data.json'의 문자열을), 생성한 파일 안에 있는 내용은 변수 jsonDataString 데이터를 넣어줘, callback함수 (err))
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('서버 자체 에러');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          let jsonResponse = JSON.stringify({ message: '데이터가 성공적으로 저장됨' });
          res.end(jsonResponse);
        });
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 code는 페이지를 찾을 수 없음');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 code는 페이지를 찾을 수 없음');
  }
});

const port = 8000;
server.listen(port, (err) => {
  if (err) {
    console.error('Error');
  } else {
    console.log('Server loading');
    console.log(`http://localhost:${port}`);
  }
});
