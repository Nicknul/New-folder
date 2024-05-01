import { styles } from "./example-3";

 let root = document.getElementById('root');
    let div = document.getElementsByTagName('div');
    
    function zero(frist, second, third) {
      console.log(frist+second*third);
    }
    zero(2, 2, 2)

    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.boxSizing = 'border-box'
    document.body.style.overflowX = 'hidden'



    div[0].style.color = "blue"

    let bodytags = [
      "margin",
      "padding",
      "boxSizing",
      "overflowX",
    ]
    
    for(let item of bodytags)
    {
    
    }