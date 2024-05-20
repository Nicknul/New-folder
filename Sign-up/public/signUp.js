const memberNames = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
]

let names = document.getElementById('name');
let namebox = document.getElementById('namebox');
// console.log(password)

//* 체크박스 색상 함수
function yellowgreen() {namebox.style.backgroundColor = "yellowgreen"}
function crimson() {namebox.style.backgroundColor = "crimson"}

// * 이름검사
function checkName(array, name) {
  for(let i = 0; i < array.length; i++) {
    if(name === array[i]) {
      yellowgreen()
      break;
    } else {
      crimson()
    }
  }
}

let phoneNumber = document.getElementById('phoneNumber');

// const auto = (target) => {
//   target.value = target.value
//   .replace(/[^0-9]/g, '')
//   .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
//   .replace(/(\-{1,2})$/g, "");
// }

function auto(target) {
  target.value = target.value
  
}

document.addEventListener('input',function() {
  checkName(memberNames, names.value)
  auto(phoneNumber)
});