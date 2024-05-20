function objectLoop(array, object) {
  for(let key in object) {
    array.push(object[key]);
  }
}
//? objectLoop()함수를 내보낼거야.
module.exports = objectLoop;