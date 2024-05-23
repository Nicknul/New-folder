const rl = require('readline');

const readLine = rl.createInterface({
  input : process.stdin,
  output : process.stdout
});

readLine.question("내가 하고 싶은 질문", function(answer){ 
  console.log("내가 적었던 질문을 띄워주세요 : ", answer)
});