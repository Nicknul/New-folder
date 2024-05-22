// setTimeout(a, 1000)
// function a() {
// }

// console.time("작업");
// console.time("첫번째 setTimeout");
// setTimeout(() => {
//   console.timeLog("첫번째 setTimeout")
//   console.log("1. 오늘 돈까스 먹었음")
//   console.timeEnd("첫번째 setTimeout");
// }, 1000) // * 가장 많이 보게되는 함수 표현식
// console.time("2");
// setTimeout(() => {
//   console.log("2. 투썸플레이스 커피도 먹었음")
//   console.timeEnd("2");
// }, 1000)
// setTimeout(() => {
//   console.log("3. 배 너무 부름")
// }, 1000)
// console.timeEnd("작업")
let counter = 0;

const timer = function() {
  setTimeout(() => {
    console.log(counter + "vw")
    counter++
    if(counter < 10) {
      timer()
    } else {
      console.log("초 세기가 중료되었습니다.")
    }
  }, 1000)
}
timer()