const input = document.querySelector('#name-input')
const userName = document.querySelector('#name-output')

input.addEventListener('input', (event) => 
    userName.textContent = !event.target.value ? 'Anonymous' : event.target.value
)