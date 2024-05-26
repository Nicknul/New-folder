let url = 'http://localhost:8080';

async function pokemonNamesLanguage() {
  let a = await fetch(url + '/dataKo.json', { method: 'GET' });
  let korean = await a.json();
  let b = await fetch(url + '/dataEn.json', { method: 'GET' });
  let english = await b.json();
  let languageEn = pokemonNames(korean, english);
}
pokemonNamesLanguage();

let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
// let apiType = "https://pokeapi.co/api/v2/type/"

let imgUrl = 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/';
let png01 = '01.png';
let png03 = '03.png';

let grid = document.getElementById('grid');

function pokemonNames(ko, en) {
  for (let i = 1; i < ko.length; i++) {
    let lowName = en[i - 1].toLowerCase();

    async function pokeApi() {
      let a = await fetch(apiUrl + i);
      let b = await a.json();
      let type0 = b.types[0].type.name;

      if (type0 === 'normal') {
        let img = new Image(160, 160);
        let div = document.createElement('div');
        let name = document.createElement('div');
        let type = document.createElement('div');
        name.textContent = ko[i - 1];
        type.textContent = '노멀';
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(type);
        grid.appendChild(div);

        let imgText = document.createTextNode(b.name);
        img.appendChild(imgText);

        if (b.name === lowName) {
          if (`${i}`[1] === undefined) {
            img.src = imgUrl + `000${i}` + png01;
          } else if (`${i}`[2] === undefined) {
            img.src = imgUrl + `00${i}` + png01;
          } else if (`${i}`[3] === undefined) {
            if (i === 131) {
              img.src = imgUrl + `0${i}` + png03;
            } else {
              img.src = imgUrl + `0${i}` + png01;
            }
          } else {
            img.src = imgUrl + `${i}` + png01;
          }
        }
      }
    }
    pokeApi();
  }
  return;
}
