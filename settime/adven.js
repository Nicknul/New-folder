// setTimeout(function(){
//   console.log("1. 너구리는 귀여워")

//   setTimeout(function(){
//     console.log("2. 고양이도 귀여워")
//   }, 1000)

// }, 1000)

// setTimeout(function(){
//   console.log("1. 너구리는 귀여워")
//   a(); // * a함수가 무엇인지 모르지만 callback했다.  
// }, 1000)

// function a() {
//   setTimeout(function(){
//     console.log("2. 고양이도 귀여워")
//   }, 1000)
// }
// !중요!
setTimeout(function() {
  console.log("1.배성빈");
  a();  
}, 3000);

function a() {
  setTimeout(function() {
    console.log("2.김정수");
    b();
  }, 2000);  
}

function b() {
  setTimeout(function() {
    console.log("3.조우식");
  }, 1000);
}