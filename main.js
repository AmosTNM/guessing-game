//Variáveis da Aplicação
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const alert = document.querySelector('h1')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//Função
function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
function handleTryClick(event) {
  event.preventDefault()
  const inputNumber = document.querySelector('#inputNumber')
  let error =
    isNaN(inputNumber.value)
    || inputNumber.value < 0
    || inputNumber.value > 10
    || inputNumber.value == null
    || inputNumber.value == ''
    
    if (error) {
      inputNumber.value = ''
      alert.textContent = 'ENTRADA INVÁLIDA'
      return
    } else {
      alert.textContent = 'Jogo da Adivinhação'
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen()
      if (xAttempts == 1) {
        document.querySelector(
          '.screen2 h2'
        ).innerText = `Você acertou em ${xAttempts} tentativa!`
      } else {
        document.querySelector(
          '.screen2 h2'
        ).innerText = `Você acertou em ${xAttempts} tentativas!`
      }
    }
  }

  inputNumber.value = ''
  xAttempts++
}
function handleResetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}