let root = document.getElementById('root');
let input = document.getElementById('input');
let button = document.getElementById('button');

function getInputValue() {
  return input.Value.trim()
}

button.addEventListener('click',function() {
  console.log(getInputValue())
  
})
