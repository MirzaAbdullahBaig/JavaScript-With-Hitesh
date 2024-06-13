let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrhi');
const startOver = document.querySelector('.resultparas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0

let playGame = true

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100){
        alert(`please enter a valid guess number between 1 to 100`)
    } else {
        prevGuess.push(guess)
        if(numGuess === 9) {
            displayGuess(guess)
            displayMessage(`Game Over. Random  Number is ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You Guessed the Number`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`You Guessed tooo Low`)
    } else if (guess > randomNumber) {
        displayMessage(`You guessed too High`)
    }
}


function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}


function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}


function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 0
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}