// function a(a, b) {
//   console.log(a);
//   console.log(b);
//   return [a, b];
// }

// function a(a, b) {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   return [a, b];
// }

// function a(a, b) {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments);
// }
// a("에이", "비");

function b(a, b, callback) {
  callback(a, b);
}

b(1, 2, function(a, b) {
  console.log(a * b);
  console.log(typeof (a * b));
})

