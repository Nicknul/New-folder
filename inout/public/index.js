let button = document.getElementById('button');
let move = document.getElementById('move');

let boolean = true
let counter = 0;
let vw = "vw"

// function out() {
//   const timer = setInterval(() => {
//     if(boolean === true) {
//       boolean = false;
//       counter--
//       move.style.marginLeft = `${counter+vw}`
//       console.log(`${counter+vw}`)
//     } else {
//       clearInterval(timer)
//     }
//   }, 50)
// }

function out() {
  const timer = setInterval(() => {
    if(boolean === true) {
      boolean = false;
      counter--
      move.style.marginLeft = `${counter+vw}`
      console.log(`${counter+vw}`)
    } else if(boolean !== false) {
      counter++
      move.style.marginRight = `${counter+vw}`
      console.log(`${counter+vw}`)
    } else {
      clearInterval(timer)
    }
  }, 50)
}

// function inbox() {
//   const timer = setInterval(() => {
//     if(boolean === false) {
//       counter++
//       move.style.marginRight = `${counter+vw}`
//       console.log(`${counter+vw}`)
//     } else {
//       clearInterval(timer)
//     }
//   }, 50)
// }

button.addEventListener('click',function() {
  out()
})

// button.addEventListener('click',function() {
//   inbox()
// })