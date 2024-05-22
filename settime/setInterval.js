let intervalhandler = 0;

let timer = setInterval(() => {
  console.log('1초' + intervalhandler);
  intervalhandler++
  if(intervalhandler > 10) {
    clearInterval(timer)
  }
}, 1000);