const fs = require('fs');
const today = require('./data');
const characters = require('./Characters')

let a = JSON.stringify(characters, null, 2)

fs.writeFileSync(`${today()}.json`, a, "utf-8")