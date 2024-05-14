async function pokemonApi(){
  let b = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  let c = await b.json()
  console.log(c.types[0].type.name)
  console.log(c.name)
}
pokemonApi();