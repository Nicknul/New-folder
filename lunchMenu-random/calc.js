function calcBoha(a, b, callback) {
  callback(a, b);
}

calcBoha(10, 20, function(a, b){
  let rseult = a + b;
  return rseult;
});

calcBoha(10, 20, function(a, b){
  let rseult = a - b;
  return rseult;
});