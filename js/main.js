/*----- constants -----*/
const wordArray = ['fun', 'running', 'sound', 'aaaaaaa'];

/*----- state variables -----*/
let guessesleft, playerguesses, secretWord;

/*----- cached elements  -----*/
const guess = document.querySelector('input');
const message = document.querySelector('main > h1');
const letters = document.getElementById('word');
const letterguess = document.querySelector('input').value;
const wrongletters = {};

/*----- event listeners -----*/
document.getElementById('wordbuild').addEventListener('click', buildguess);
// document.getElementById('guessselect').addEventListener('click', guessCheck(letterguess));
document.querySelector('*').addEventListener('keypress', keyPressEvt);
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
        div.setAttribute('id', `${i}`)
        word.appendChild(div);
        const newdiv = document.getElementById(`${i}`);
        newdiv.setAttribute('value', `${secretWord[i]}`);
    }
}

render();

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

function keyPressEvt(keyedin) {
    const secretWordArr = secretWord.split('');
    const letter = secretWordArr.find((element) => element === keyedin.key);
    if (letter === undefined) {
        wrongletters.push(keyedin.key);
    } else {
        for (let i = 0; i < secretWordArr.length; i++){
            if (secretWordArr[i] === keyedin.key) {
                const div = document.getElementById(`${i}`);
                div.innerHTML = keyedin.key;
                div.style.fontSize = '80px';
                div.style.border = 'none';
            }
        }
    }
}

function displaySpaceman() {
    const spaceman = querySelector('main > div > img');
}
