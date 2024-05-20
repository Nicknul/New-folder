//* for in문만 하는 함수가 생성되었다.
// function objectLoop(array, object) {
//   for(let key in object) {
//     array.push(object[key]);
//   }
// }
//? module.objectLoop.js 파일에 있는 objectLoop()함수를 가져올거야.
const objectLoop = require('./module.objectLoop')

function forOb(a, b) {
  try {
    if(typeof(a) === "object") {
      if(typeof(b) === "object") {
        // let result = a.first + b.first
        // console.log(result); 
        let values = [];
        //* for in문만을 사용할 함수를 forOb() 안에 넣어주었다.
        objectLoop(values, a)
        objectLoop(values, b)

        console.log(values)
        // let add = values[0] + values[1];
        let add = values.reduce((a, b) => {
          return a + b;
        });
        console.log("다 더한 값 : ", add)
      }
    }
  } catch(error) {
    console.log(error)
    console.error("객체 아님")
  }
}

const someData = require('./someData')

// * 객체를 초기화 했다.
const a = {
  first : 1
}
const b = {
  first : 1
};

forOb(someData.a, someData.b)