const numberOfCategories = document.querySelector('ul#categories').children.length;
console.log(numberOfCategories)

const firstListCategory = document.querySelector('ul#categories').firstElementChild.firstElementChild.textContent
console.log(firstListCategory)

const firstListNumberOfEl = document.querySelector('ul#categories').firstElementChild.querySelectorAll('.item li').length
console.log(firstListNumberOfEl)

const secondListCategory = document.querySelector('ul#categories').children[1].firstElementChild.textContent
console.log(secondListCategory)

const secondListNumberOfEl = document.querySelector('ul#categories').children[1].querySelectorAll('.item li').length
console.log(secondListNumberOfEl)

const thirdListCategory = document.querySelector('ul#categories').lastElementChild.firstElementChild.textContent
console.log(thirdListCategory)

const thirdListNumberOfEl = document.querySelector('ul#categories').lastElementChild.querySelectorAll('.item li').length
console.log(thirdListNumberOfEl)