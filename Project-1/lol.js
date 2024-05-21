async function lol() {
  let a = await fetch("https://ddragon.leagueoflegends.com/cdn/14.10.1/data/en_US/champion.json")
  let b = await a.json()
  console.log(b.data)
}
lol()

