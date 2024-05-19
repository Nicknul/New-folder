let url = "http://localhost:3000";

let root = document.getElementById('root');
let h1 = document.getElementById('names');
let button = document.getElementById('button');
let img = new Image (200, 200);
root.appendChild(img)

let string = "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/";
let png01 = "01.png";
let png03 = "03.png";


function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function pokemonSelector(array) {
  const firstGetRandomIndex = getRandomInt(0, 1026);
  
  for(let i = 1; i < 1026; i++) {
    if(i === firstGetRandomIndex) {
      if(`${i}`[1] === undefined) {
        img.src = string + `000${i}` + png01;
      } else if(`${i}`[2] === undefined) {
        if(i === 131) {
          img.src = string + `00${i}` + png03;
          h1.textContent = array[i - 1]
        } else {
          img.src = string + `00${i}` + png01;
          h1.textContent = array[i - 1]
        }
      } else if(`${i}`[3] === undefined) {
        img.src = string + `0${i}` + png01;
        h1.textContent = array[i - 1]
      } else if(`${i}`[4] === undefined) {
        img.src = string + `${i}` + png01;
        h1.textContent = array[i - 1]
      }
    }
  }
  return firstGetRandomIndex
}

// button.addEventListener('click', function() {
//   async function pokemonNames() {
//     let a = await fetch(url + "/data.json", {method : "GET"})
//     let b = await a.json()
//     let c = pokemonSelector(b)
//   }
//   pokemonNames()
// })

myInterval = setInterval(setImage, 100);
 
function setImage() {
  async function pokemonNames() {
    let a = await fetch(url + "/data.json", {method : "GET"})
    let b = await a.json()
    let c = pokemonSelector(b)
  }
  pokemonNames()
  pokemonSelector()  
}
 
function stopImage() {
  clearInterval(myInterval);
}
