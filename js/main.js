/*----- constants -----*/
const wordArray = ['fun', 'running', 'sound', 'aaaaaaa'];

/*----- state variables -----*/
let guessesleft, playerguesses, secretWord;

/*----- cached elements  -----*/
const guess = document.querySelector('input');
const message = document.querySelector('main > h1');
const letters = document.getElementById('word');
const letterguess = document.querySelector('input').value;
const arrSecretWord = secretWord.split('');
/*----- event listeners -----*/
document.getElementById('wordbuild').addEventListener('click', buildguess);
document.getElementById(guessselect).addEventListener('click', guessCheck);

/*----- functions -----*/
// function guessCheck() {
//     secretWord.split('').forEach(char => {
//         if (letterguess.toLocaleLowerCase() === char) {

//         } else {
//             guessesleft - 1

//         }
//     })
// }

function chooseWord() {
    let i = Math.floor(Math.random() * wordArray.length);
    secretWord = wordArray[i];
}
function rednerWord(secretWord) {
    for (let i =0; i < secretWord.length; i++) {
        const div = document.createElement('div');
        div.innerHTML(secretWord[i]);
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
    render();
}

function displaySpaceman() {
    const spaceman = querySelector('main > div > img');
}

function setupBoard() {

}

function displayMessage() {

}