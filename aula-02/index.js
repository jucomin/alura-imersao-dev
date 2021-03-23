//const nameOfTheGame = 'Tetris'
//document.write('The Game:' + ' ' + nameOfTheGame)
//aspas com espaço no meio para deixar espaço entre as palavras

const firstValue = parseInt(prompt('Input first value:'))
const operation = prompt('Choose operation ( +, -, *, / ):')
const secondValue = parseInt(prompt('Imput second value:'))

const h2 = document.querySelector('h2')

if (operation === '+') {
  const result = firstValue + secondValue
  h2.innerText = firstValue + ' + ' + secondValue + ' = ' + result
} else if (operation === '-') {
  const result = firstValue - secondValue
  h2.innerText = firstValue + ' - ' + secondValue + ' = ' + result
} else if (operation === '*') {
  const result = firstValue * secondValue
  h2.innerText = firstValue + ' x ' + secondValue + ' = ' + result
} else if (operation === '/') {
  const result = firstValue / secondValue
  h2.innerText = firstValue + ' / ' + secondValue + ' = ' + result
} else {
  h2.innerText = 'Invalid operation.'
}
