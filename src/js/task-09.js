const generateColor = document.querySelector(".change-color")
const body = document.body
const span = document.querySelector(".color")

generateColor.addEventListener('click', getRandomHexColor)
generateColor.addEventListener('click', changeColor)

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}