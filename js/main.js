/*----- constants -----*/
const wordArray = ['fun', 'running', 'sound', 'aaaaaaa'];

/*----- state variables -----*/
let guessesleft, letterguess, playerguesses, secretWord;

/*----- cached elements  -----*/
const guess = document.querySelector('input');
const message = document.querySelector('main > h1');
const letters = document.getElementById('word');
/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', buildguess);


/*----- functions -----*/
function chooseWord() {
    let i = Math.floor(Math.random() * wordArray.length);
    secretWord = wordArray[i];
}
function rednerWord(secretWord) {
    for (let i =0; i < secretWord.length; i++) {
        const div = document.createElement('div');
        word.appendChild(div);
    }
}
function displaySpaceman() {

}

function render() {
    setupBoard();
    displayGuesses();
    displayMessage(); 
}

function setupBoard() {

}

function displayGuesses() {

}

function displayMessage() {

}