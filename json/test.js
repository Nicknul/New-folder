const htmlMarkup = {
  head : "헤드",
  body : "바디",
}

function test(object) {
  let result = [];
  for(let key in object) {
    result.push(`<${key}> ${object[key]} </${key}>`)
  }
  console.log(result);
  return result.join(" ")
}
test(htmlMarkup)
console.log(test(htmlMarkup))