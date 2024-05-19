const { type } = require("os");

const lunchMenus = [
  ["주니어와퍼", "몬스터와퍼", "스테커버거","콰트로치즈", "와퍼"],
  ["쉑쉑버거", "핫도그", "밀크쉐이크", "스모크쉑버거"],
  "순두부찌개",
  ["치킨마요", "참치마요", "무슨마요", "도련님도시락"],
  ["짜장면", "짬뽕", "볶음밥", "잡채밥", "유린기"],
  "쭈꾸미",
  "함박스테이크",
  "마라탕",
  "곰탕",
  "돈까스",
  "쌀국수",
  "분식",
  "칼국수",
  "콩나물밥",
];


function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function lunchSelector(array) {  
  const firstGetRandomIndex = getRandomInt(0, array.length);
  // console.log(firstGetRandomIndex);
  for(let i =0; i < array.length; i++) {
    //  console.log(array[i]);
    if(Array.isArray(array[firstGetRandomIndex])){
      const randomIndex = getRandomInt(0, array[i].length);
    }
  }


  return array;
}
lunchSelector(lunchMenus);


// * 랜덤을 정하면 -> 그것이 하나의 인덱스가 되서 -> 배열 속 원소값을 선택해주는
// * 배열 원소 값이 또 배열이라면?
// * if(배열원소가 배열이라는 것만 알아낸다면) {
// *  배열원소 속 배열을 결졍해주어야 함
// * }

// function lunchSelector(array) {
//   랜덤을 결정하면 -> 그것이 하나의 인덱스가 되서 -> 배열속 원소값을 선택해주는

//   if(Array.isArray(array) === true)

//   if(배열원소가 배열이라는 것만 알아낸다면) {
//     배열원소 속 배열을 결정해주어야 함
//   }
//   return "어떤 값이 있을예정";
// }
