const rl = require('readline');
const fs = require('fs');
const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));

const readLine = rl.createInterface({
  input : process.stdin,
  output : process.stdout
});

readLine.question("포켓몬스터 이름 작성해주세요 :", function(answer){
  let answerData = [];
  let score = 0;
  answerData.push(answer);
  console.log(answerData);
  readLine.close();
  // pokemonData.forEach((element) => {
    
  // });
});

// todo : 1. 답변을 받는다.
// todo : 2. 답변과 기초데이터와의 존재 유무를 판단한다.
// todo : 3. 존재한다면 위 지역변수 배열에 추가한다.(append)
// todo : 4. 존재한다면, score를 1점 추가한다.
// todo : 5. 존재하지 않는다면, 다시한번 물어본다.
// todo : 6. "종료" 라고 말한다면, 질문을 종료하고 결과를 보여준다.
// todo : 7. 결과는 총 "포켓몬스터 score 개"를 작성하였습니다. 라는 로그를 남겨준다. 