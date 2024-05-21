const fs = require('fs');

const today = require("./today");
// console.log(today());

const htmlMarkup = {
  head : {
    title : "json 연습",
  },
  body : {
    div : "메뉴 부분",
    li : "메인 부분",
    p : "하단 부분",
  },
}

let convertJson = JSON.stringify(htmlMarkup,null,2);
//?json으로 변환된 아이가 담겨져있다.

const write = fs.writeFileSync(`${today()}-htmlMarkup.json`, convertJson, "utf-8", function(err) {
  if(err) {
    console.error("파일만드는 것 에러");
    console.log("에러 내용 :", err)
  }
  console.log("저장 잘 됨");
})