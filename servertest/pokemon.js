
// 포켓몬 이미지, 선택 버튼 요소
let root = document.getElementById('root')
let pokemonimage = document.createElement('h1')
root.appendChild(pokemonimage)
let selecbutton = document.createElement('div')
root.appendChild(selecbutton)


const pokemonlist = require('./pokemonNames.json')

function pokemonSelector(array) {
  
  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  const firstGetRandomIndex = getRandomInt(0, array.length);

  for (let i = 0; i < array.length; i++) {
    
    
    if (Array.isArray(array[firstGetRandomIndex]) === true) {
      const randomIndex = getRandomInt(0, array[i].length);

      for (let j = 0; j < array[i].length; j++) {
        return array[firstGetRandomIndex][randomIndex];
      }
    }
  }
  return array[firstGetRandomIndex];
}


// 포켓몬 이미지에 포켓몬 리스트 넣기 
const getData = pokemonSelector(pokemonlist);
let PText = document.createTextNode(getData);
pokemonimage.appendChild(PText)
