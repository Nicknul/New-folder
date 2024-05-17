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

let input = document.getElementById('name_input');
let colorBox = document.getElementById('colorBox');
console.log(input.value);

input.addEventListener("input", function() {
  for(let i = 0; i < memberNames.length; i++) {
    if(input.value === memberNames[i]) {
      colorBox.style.backgroundColor = "lightgreen"
      console.log("값이 있습니다.")
    } else if(input.value === ""){
      colorBox.style.backgroundColor = "pink"
      console.log("값이 없습니다.")
    }
  }
})


// function a(b) {
//   if(b.value === "") {
//     colorBox.style.backgroundColor = "pink"
//   } else {
//     colorBox.style.backgroundColor = "lightgreen"
//   }
//   return b
// }
// a(input)