/*----- constants -----*/
const wordArray = ['fun', 'running', 'sound', 'aaaaaaa'];

/*----- state variables -----*/
let guessesleft, letterguess, playerguesses, secretWord;

/*----- cached elements  -----*/
const guess = document.querySelector('input');
const message = document.querySelector('main > h1');
/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', buildguess);


/*----- functions -----*/
function chooseWord() {
    let i = Math.floor(Math.random() * wordArray.length);
    return wordArray[i];
}
function rednerWord() {

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