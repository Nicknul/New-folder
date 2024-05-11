let root = document.getElementById('root');
let newDiv = document.createElement('div');
let button = document.getElementById('button');
root.appendChild(newDiv);


let string = "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/";
let png01 = "01.png";
let png03 = "03.png";
let img = new Image (300, 300);
newDiv.appendChild(img)

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function pokemonSelector() {
  const firstGetRandomIndex = getRandomInt(0, 1025);
  
  for(let i = 1; i < 1025; i++) {
    if(i === firstGetRandomIndex) {
      // console.log(`${i}`[4])
      if(`${i}`[1] === undefined) {
        img.src = string + `000${i}` + png01;
      } else if(`${i}`[2] === undefined) {
        if(i === 131) {
          img.src = string + `00${i}` + png03;  
        } else {
          img.src = string + `00${i}` + png01;
        }
      } else if(`${i}`[3] === undefined) {
        img.src = string + `0${i}` + png01;
      } else if(`${i}`[4] === undefined) {
        img.src = string + `${i}` + png01;
      }
    }
  }
  return firstGetRandomIndex
}
console.log(pokemonSelector());

button.addEventListener('click',function(){
  let loop = pokemonSelector()
});
