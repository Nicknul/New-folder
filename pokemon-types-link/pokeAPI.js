let url = "http://localhost:8080"

async function apl() {
  let a = await fetch(url + '/dataEn.json', {method : "GET"})
  let b = await a.json()
  console.log(b)
}