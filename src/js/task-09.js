const generateColor = document.querySelector(".change-color")
const body = document.body
const span = document.querySelector(".color")


generateColor.addEventListener('click', changeColor)

function changeColor() {
  const randomColor = getRandomHexColor(); 
  span.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}