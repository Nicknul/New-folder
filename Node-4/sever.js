const getPokemon = require("./pokemonNames.json");

const fs = require('fs');

function loadPokemonNames(path) {
  try {
    if (typeof(path) === "string") {
      const pokemonValue = fs.readFileSync(path, 'utf8');
      return JSON.parse(pokemonValue);
    } 
  } catch (error) {
    console.error("에러 내용:", error);
  }
}
// console.log(data[data.length-1]);
// console.log(data[0][0]);
const data = loadPokemonNames("./pokemonNames.json");

const http = require('http');

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write("<html>");
  res.write("<head>");
  res.write("<title>");
  res.write("pokemonNames");
  res.write("</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>");
  res.write(data[data.length-1]);
  res.write("</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, (error) => {
  if(error) {
    console.log('Error: ', error);
  } else {
    console.log('서버돌아감');
    console.log(`http://localhost:3000/`);
  }
});
