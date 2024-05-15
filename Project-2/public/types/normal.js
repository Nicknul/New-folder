let url = "http://localhost:8080"

async function pokemonNamesLanguage() {
  let a = await fetch(url + '/dataKo.json', {method:"GET"})
  let korean = await a.json()
  let b = await fetch(url + '/dataEn.json', {method:"GET"})
  let english = await b.json()
  let languageEn = pokemonNames(korean, english)
}
pokemonNamesLanguage()

let apiString = "https://pokeapi.co/api/v2/pokemon/"

let urlString = "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/";
let png01 = "01.png"
let png03 = "03.png"

let normalNames = document.getElementById('normalNames');
let grid = document.getElementById('grid');

function pokemonNames(ko, en) {
  for(let i = 0; i < ko.length; i++) {
    let img = new Image(100, 100);
    let div = document.createElement('div')
    let nameDiv = document.createElement('div')
    nameDiv.textContent = ko[i]
    div.appendChild(img);
    div.appendChild(nameDiv);
    grid.appendChild(div);

    async function pokemonApi(){
      let a = await fetch(apiString + `${i + 1}`)
      let b = await a.json()
      let jsonNames = en[i].toLowerCase();
      img.innerText = jsonNames
      console.log(img)
      // console.log(b.name)
      // if(img === b.name) {
      //   console.log(b.name)
      // }
      return
    }
    pokemonApi();
  }
  return
}