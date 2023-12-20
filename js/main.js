/*----- constants -----*/

const wordArray = ['fun', 'running', 'sound', 'aaaaaaa'];

// const spaceman = {
//     '0': '',
//     '1': 'images/1.png',
//     '2': 'images/2.png',
//     '3': 'images/3.png',
//     '4': 'images/4.png',
//     '5': 'images/5.png',
//     '6': new URL('../images/6.png')
// }

/*----- state variables -----*/

let guessesleft, playerguesses, secretWord;

/*----- cached elements  -----*/

const guess = document.querySelector('input');

const messageEl = document.querySelector('main > h2');

const letters = document.getElementById('word');

const correctLetters = [];

const wrongletters = [];

const wronglettersEl = document.getElementById('wrongletters');

const spaceman = document.querySelector('main > div > img');

/*----- event listeners -----*/

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
    guessesleft = 6;
    message();
}

function buildGuess() {
    const word = document.getElementById('word');
    while (word.lastElementChild) {
        word.removeChild(word.lastElementChild);
    }
    while (wrongletters.length > 0) {
        wrongletters.pop();
    }
    wronglettersEl.innerHTML = ` ${wrongletters}`;
    init();
}

// gets the key thats pressed if undefined 
function keyPressEvt(keyedin) {
    const secretWordArr = secretWord.split('');
    const letter = secretWordArr.find((element) => element === keyedin.key);
    if (correctLetters.length === secretWordArr.length || wrongletters.length === 6){
        buildGuess();
    } else if (letter === undefined) {
        wrongletters.push(keyedin.key);
        wronglettersEl.innerHTML = ` ${wrongletters}`;
        guessesleft--;
        displaySpaceman()
    } else {
        for (let i = 0; i < secretWordArr.length; i++){
            if (secretWordArr[i] === keyedin.key) {
                const div = document.getElementById(`${i}`);
                div.innerHTML = keyedin.key;
                div.style.fontSize = '80px';
                div.style.border = 'none';
                correctLetters.push(keyedin.key);
            }
        }
    }
    message();
}

function message() {
    if (correctLetters.length === secretWord.length) {
        messageEl.innerHTML = 'You Won Congrats!!';
    } else if (wrongletters.length === 6) {
        messageEl.innerHTML = 'you lost womp womp';
    } else {
        messageEl.innerHTML = `You have ${guessesleft} guesses leftf`;
    }
}

function displaySpaceman() {
    // const spaceman = document.querySelector('main > div > img');
    // spaceman.setAttribute('src', `${spaceman[guessesleft]}`);
}
