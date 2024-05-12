//* 서버 Url
let url = "http://localhost:3000";


// 포켓몬 이미지, 선택 버튼 요소
let root = document.getElementById('root')
let pokemonimage = document.createElement('h1')
root.appendChild(pokemonimage)
let selecbutton = document.createElement('div')
root.appendChild(selecbutton)


//* 클라이언트에서 서버로 요청하는 방식은 2가지가 있습니다.
//* XHTTPRequest, fecth
//* fetch를 이용해서 해볼게요

//* 데이터를 요청하고 처리하려면 비동기 방식을 알아야 해요.
//* async를 붙여 비동기제어를 한다고 알려줍시다.
//! async, await 방식
let request = async function(){
  //* 비동기 쓰는 방식이 2가지가 있습니다. 
  //* (1) async, await (2) then 
  //* 2가지다 보여드릴게요. 

  //* await를 만나면 이 함수를 호출한 상위 환경으로 넘어가게 됩니다. 

  //* await를 만나면 해당 지점에서 멈추게 됩니다.
  //* (1) await를 만나면 fetch로 데이터를 받을 때 까지 대기 해라는 뜻입니다.
  //! 중요 "/data.json"를 한 이유는 서버에서 req.url로 분류하기 위함입니다.
  const res = await fetch(url + "/data.json", {method : "GET"});
  //* (2) await를 만나면 해당 data를 객체로 파싱할때까지 대기해라는 뜻입니다.
  const data = await res.json();


  const getData = pokemonSelector(data);
  let PText = document.createTextNode(getData);
  pokemonimage.appendChild(PText)
  
}


//! then, Promise 방식?
let requestL1 = fetch(url + "/data.json", {method : "GET"})
//* 콜백함수입니다. fetch를 통해 데이터가 들어오면, then으로 넘어갑니다. 
.then(res => res.json())
//* 객체로 파싱된 data는 jsonData 입니다
.then(data => {
  //TODO 객체로 변환된 JSON 데이터를 이용해주시면되요.
  //* 예시
  const getData = pokemonSelector(data);
  let PText = document.createTextNode(getData);
  pokemonimage.appendChild(PText)
}); 







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
