const listItems = document.querySelectorAll('.item')

const numberOfCategories = listItems.length;
console.log('Number Of Categories:', numberOfCategories)

for (const item of listItems) {
    console.log('Category:',item.querySelector('h2').textContent);
    console.log('Elements:',item.querySelectorAll('li').length);
}