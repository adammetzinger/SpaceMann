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

function render() {
    // setupBoard();
    // displaySpaceman();
    // displayMessage();
    chooseWord();
    rednerWord(secretWord);
}
function buildguess() {
    const word = document.getElementById('word');
    while (word.lastElementChild) {
        word.removeChild(word.lastElementChild);
      }
}

function displaySpaceman() {

}

function setupBoard() {

}

function displayMessage() {

}