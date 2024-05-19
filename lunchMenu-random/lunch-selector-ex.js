function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

// getRandomInt(0, array.length);
function lunchSelector(array) {
  const firstGetRandomIndex = getRandomInt(0, array.length);
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[firstGetRandomIndex])) {
      const randomIndex = getRandomInt(0, array[i].length);
      for (let j = 0; j < array[i].length; j++) {
        return array[firstGetRandomIndex][randomIndex];
      }
      return array[randomIndex];
    }
  }
  return array[firstGetRandomIndex];
}
console.log(lunchSelector(lunchMenus));

function add(a, b) {
  return a + b;
}
console.log(add(1, 2));``