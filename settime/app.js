let fromData = {
  a : "1. 꽁꽁 얼어붙은",
  b : "2. 유등천 위로",
  c : "3. 고양이가 걸어다닙니다."
}

function a() {
  console.log(fromData.a)
}

function b() {
  console.log(fromData.b)
}

function c() {
  console.log(fromData.c)
}
setTimeout(function() {
  console.log("4. 나와라 뿅!");
}, 3000);
c();
a();
b();