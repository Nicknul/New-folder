const rl = require('readline');
const fs = require('fs');
const pokomonData = JSON.parse(fs.readFileSync("./pokomon.json"));

const readLine = rl.createInterface({
  input: global.process.stdin,
  output: global.process.stdout,  
});
// console.dir(readLine)

readLine.question("포켓몬스터 이름 작성해주세요. : ", (answer) => {
  for(let i = 0; i < pokomonData.length; i++) {
    // console.log("No." + (i + 1))
    if(answer === pokomonData[i]) { //*존재한다면, 값이 있다면
      console.log("포켓몬스터 이름이 존재합니다.");
      readLine.close();
      break;
    } else {
      // console.log("포켓몬 이름이 존재하지 않습니다.");
      readLine.close();
    }
  }
})

// readLine.question("너의 이름은 무엇입니까? :", function(answer) {
//   console.log("너가 쓴 대답은 :", answer)
//   readLine.close();
// });

// readLine.question("좋아하는 동물은 무엇입니까? : ", function(answer) {
//   if(answer !== "고양이") {
//     console.log("땡 틀렸습니다.");
//     readLine.question("좋아하는 동물은 무엇입니까? : ", function(answer) {      
//     })
//   } else {
//     readLine.question("고양이가 맞다면 어떤 고양이를 좋아합니까? : ", function(answer) {
//       readLine.close();    
//     })
//   }
// });

// readLine.question("만들고 싶은 HTML 파일이름을 작성해주세요. : ", function(answer){
//   let data = answer;

//   const fs = require('fs');
//   fs.writeFileSync(data+".html", "hello", "utf-8", function(error) {
//     if(error === true) {
//       console.log("파일 생성 실패");
//     } else {
//       console.log("파일 생성 성공");
//     }
//     readLine.close();
//   })

// });