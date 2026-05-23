let randomnumber = parseInt(Math.random()* 100 +1);
const sumbit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField');
const guessSlot= document.querySelector('.guesses');
const remaining  = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')
let playGame = true;
let prevGuess = [];
let numberofguesses = 1;

if(playGame){
    sumbit.addEventListener('click',(e) =>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
 if(isNaN(guess)){
    alert('Please enter a valid number')
 }
 else if(guess < 1){
    alert('Please enter a number greater than 1')
 }
 else if(guess > 100) {
    alert('Please  enter a number less than 100')
 }
 else{
    prevGuess.push(guess)
    if(numberofguesses === 11){
        displayGuess(guess);
        displayMessage(`Game Over . Random number was ${randomnumber}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
 }
}

function checkGuess(guess){
    if(guess === randomnumber){
        displayMessage(`Your guess is correct . YOU WON`)
        endGame()
    }
    else if(guess < randomnumber){
        displayMessage(`Guessed number is TOO LOW`)
    }
    else if (guess > randomnumber){
        displayMessage(`Gussed number is TOO HIGH`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}   `
    numberofguesses++;
    remaining.innerHTML = `${11 - numberofguesses}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="new game">Start new game</h2>`
    startOver.appendChild('p')
    playGame = false
    newGame()
    
}

function newGame(){
    const newstartbutton = document.querySelector('#new game')
    newstartbutton.addEventListener('click' , function(e){
        randomnumber = parseInt(Math.random()* 100 +1);
        prevGuess = []
        numberofguesses = 1
        guessSlot = ''
        remaining.innerHTML = `${11 - numberofguesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true

    })

}