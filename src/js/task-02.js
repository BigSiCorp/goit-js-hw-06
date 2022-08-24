const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = ingredients.map(ingredient => {
  const newItem = document.createElement("li");
  newItem.classList.add('item');
  console.log(newItem)
  newItem.textContent = ingredient;
  return newItem
});

document.querySelector("ul#ingredients").append(...listOfIngredients)