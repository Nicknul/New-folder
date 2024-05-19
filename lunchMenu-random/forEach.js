const studentNamesArray = require('./names-data.js');

studentNamesArray.forEach((name) => {
  console.log(name);
});

function na(array) {
  for(let i = 0; i < array.length; i++) {
    let name = array[i];
    console.log(name);
  }
} 

//* 절차를 이해할 것 같다 -> forEach를 사용하면 된다.