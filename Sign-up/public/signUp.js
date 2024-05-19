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

function a() {
  let count = [];
  return count
}
console.log(a())






let input = document.getElementById('name');
let box = document.getElementById('box');


input.addEventListener("change", function() {
  let add = [];  
  let count = add.push(input.value)
  console.log(add)

  // if(add[0] === memberNames[0]){
  //   box.style.backgroundColor = "greenyellow"
  // }

  // for(let i = 0; i < memberNames.length; i++) {
  //   console.log(add[i])
  //   if(add[i] === memberNames[i]) {
  //     box.style.backgroundColor = "greenyellow"
  //   } else if(add[i] === ""){
  //     box.style.backgroundColor = "crimson"
  //   }
  // }
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