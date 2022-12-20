
const buttonStartRef = document.querySelector(`button[data-start]`);
console.log(buttonStartRef);

const buttonStopRef = document.querySelector(`button[data-stop]`);
console.log(buttonStopRef);

const bodyRef = document.querySelector(`body`);

buttonStartRef.addEventListener("click", startChangeColor);

buttonStopRef.addEventListener("click",stopChangeColor);

let timerId = null;

function startChangeColor(e) {

  e.target.setAttribute("disabled", "inactive");

    timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
    
  // bodyRef.style.backgroundColor = timerId;

  // timerId = setInterval(getRandomHexColor(), 1000);

  }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function stopChangeColor() {

  buttonStartRef.removeAttribute('disabled');
  
  clearInterval(timerId);
    
}



