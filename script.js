const display = document.getElementById("current-out");
const prevDisplay = document.getElementById("Previous-out");

function action(obj){
  var pushed = obj.innerHTML;
  
  if(pushed == '='){
    display.innerHTML = Math.round(eval(display.innerHTML) * 10000) / 10000;
    console.log(typeof(eval(display.innerHTML)))
    prevDisplay.innerHTML = display.innerHTML;
  }else if (pushed == 'CLEAR'){
    display.innerHTML = '0';
  }else if(pushed == 'DELETE'){
    currentNum = display.innerHTML.length - 1;
    display.innerHTML = display.innerHTML.replace(display.innerHTML[currentNum],'');
    if(display.innerHTML.length == '0'){
      display.innerHTML = 0;
    }
  }else{
    if(display.innerHTML == '0'){
      display.innerHTML = pushed;
    }else{
      display.innerHTML += pushed;
    }
  }
}

