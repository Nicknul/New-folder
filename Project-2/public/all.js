// const { domainToUnicode } = require("url");
let url = "http://localhost:8080"

async function pokemonNamesKo() {
  let a = await fetch(url + '/dataKo.json', {method:"GET"})
  let korean = await a.json()
  let languageKo = pokemonNames(korean)
}
pokemonNamesKo()

async function pokemonNamesEn() {  
  let a = await fetch(url + '/dataEn.json', {method:"GET"})
  let english = await a.json()
  let languageEn = namesEn(english)
}
pokemonNamesEn()

let apiString = "https://pokeapi.co/api/v2/pokemon/"

let grid = document.getElementById('grid');

let urlString = "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/";
let png01 = "01.png"
let png03 = "03.png"

function namesEn(array) {
  for(let i = 1; i < array.length; i++) {
    // console.log(array[i - 1])
    async function pokemonApi(){
      let b = await fetch(apiString + i)
      let c = await b.json()
      // console.log(c.types[0].type.name)
      console.log(c.name)
      // if(array[i - 1]) {
      //   console.log("정답!")
      // }
    }
    pokemonApi();
  }
  return
}

function pokemonNames(array) {
  for(let i = 1; i < array.length + 1; i++) {
    let newImg = new Image(100, 100);
    let newDiv = document.createElement('div')
    let nameDiv = document.createElement('div')
    nameDiv.textContent = array[i - 1]

    newDiv.appendChild(newImg);
    newDiv.appendChild(nameDiv);
    grid.appendChild(newDiv);

    if(`${i}`[1] === undefined) {
      newImg.src = urlString + `000${i}` + png01;
    } else if(`${i}`[2] === undefined) {
      newImg.src = urlString + `00${i}` + png01;
    } else if(`${i}`[3] === undefined) {
      if(i === 131) {
        newImg.src = urlString + `0${i}` + png03;
      } else {
        newImg.src = urlString + `0${i}` + png01;
      }
    } else {
      newImg.src = urlString + `${i}` + png01;
    }
  }
  return
}