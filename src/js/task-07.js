const input = document.querySelector('#font-size-control')
const abracadabra = document.querySelector('#text')


input.addEventListener('input', () => 
abracadabra.style.fontSize = `${input.value}px`)