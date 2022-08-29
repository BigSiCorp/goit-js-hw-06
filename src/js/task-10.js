const container = document.querySelector("#boxes");
const objectsAmount = document.querySelector("#controls > input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", () => {
  createBoxes(objectsAmount.valueAsNumber);
});

function createBoxes(amount) {
  let markup = "";
  let objectsCollection = [];

  for (let i = 0; i < amount; i += 1) {
    const containers = container.querySelectorAll(".box").length;
    const obj = {
      width: 30 + 10 * (i + (containers < 1 ? 0 : containers)),
      height: 30 + 10 * (i + (containers < 1 ? 0 : containers)),
      color: getRandomHexColor(),
    };
    objectsCollection.push(obj);
  }

  markup = objectsCollection.reduce((acc, el) => {
    return (
      acc +
      `<div class='box' style = "background-color:${el.color}; width:${el.width}px; height:${el.height}px"></div>`
    );
  }, "");
  container.insertAdjacentHTML("beforeend", markup);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  container.innerHTML = "";
  objectsAmount.value = null;
}
