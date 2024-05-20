function forOb(a, b) {
  try { // * try이만 보면 된다. catch는 어짜피 에러이기 때문이다.
    if(typeof(a) === "object") {
      if(typeof(b) === "object") {
        // let result = a.first + b.first
        // console.log(result);
        let values = []; // * 배열 초기화 진행
        for(let i in a) { // * 일반 반복문을 돌릴 수 없는 것이 초기화를 진행한 배열이 빈 배열이기 때문이다.
          values.push(a[i]) // * 자스형 values.배열에 넣어(a[i])
        }
        for(let i in b) {
          values[1] = a[i] // * c언어형
        }
        console.log(values)
        // let add = values[0] + values[1]; // * 간단하게 할 수 있는 방법이 없을까?
        let add = values.reduce((a, b) => { // * 자스형 방식 
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

// * 객체를 초기화 했다.
const a = {
  first : 1
}
const b = {
  first : 1
};

forOb(a, b)