/*----- constants -----*/
const wordArray = ['fun', 'running', 'sound', 'aaaaaaa'];

// const spaceman = {
//     '0': '',
//     '1': '../images/1.png',
//     '2': '../images/2.png',
//     '3': '../images/3.png',
//     '4': '../images/4.png',
//     '5': '../images/5.png',
//     '6': new URL('../images/6.png')
// }

/*----- state variables -----*/
let guessesleft, playerguesses, secretWord;

/*----- cached elements  -----*/
const guess = document.querySelector('input');
const message = document.querySelector('main > h1');
const letters = document.getElementById('word');
const letterguess = document.querySelector('input').value;
const wrongletters = [];

/*----- event listeners -----*/
document.getElementById('wordbuild').addEventListener('click', buildguess);

document.querySelector('*').addEventListener('keypress', keyPressEvt);
/*----- functions -----*/

function chooseWord() {
    let i = Math.floor(Math.random() * wordArray.length);
    secretWord = wordArray[i];
}

function rednerWord(secretWord) {
    for (let i =0; i < secretWord.length; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', `${i}`)
        word.appendChild(div);
    }
}

init();

function init() {
    chooseWord();
    rednerWord(secretWord);
    guessesleft = 3;
    displaySpaceman()
}
function buildguess() {
    const word = document.getElementById('word');
    while (word.lastElementChild) {
        word.removeChild(word.lastElementChild);
    }
    init();
}

function keyPressEvt(keyedin) {
    const secretWordArr = secretWord.split('');
    const letter = secretWordArr.find((element) => element === keyedin.key);
    if (letter === undefined) {
        wrongletters.push(keyedin.key);
        document.getElementById('wrongletters').innerHTML = ` ${wrongletters}`;
        guessesleft--;
        displaySpaceman()
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
    // const spaceman = document.querySelector('main > div > img');
    // spaceman.setAttribute('src', `${spaceman[guessesleft]}`);
}
