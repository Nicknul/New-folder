const getArray = require("./pokemonNames.json");
// console.log(getArray);

// for(let i = 0; i < getArray.length; i++) {
  // console.log(getArray[i]);
// }

function pokemonNames(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  return array;
}

// const createHTML = `<!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>pokemonNames</title>
// </head>
// <body>
//   <div id="root"></div>

//   <script src="readFileSync.js">
  
//   </script>

// </body>
// </html>`;

// const fs = require('fs');

// fs.writeFile("pokemon-1.html", createHTML, function(){

// })

// console.log(write("<h1>"));

const http = require('http');

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write("<html>");
  res.write("<head>");
  res.write("<title>");
  res.write("점심 메뉴 고르기");
  res.write("</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>");
  const getData =pokemonNames(getArray)
  console.log(getData); 
  res.write(getData);
  res.write("</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3001, (error) => {
  if(error) {
    console.log('Error: ', error);
  } else {
    console.log('서버돌아감');
    console.log(`http://localhost:3001/`);
  }
});