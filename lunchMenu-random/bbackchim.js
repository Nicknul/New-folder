function work(string) {
  try {
    if (typeof (string) === "string") {
      console.log(string);
    }
  } catch {
    console.log('땡!');
  }
}

work("안녕!");
work(1);
work(true);
work({name: "공욱재"});