/*----- constants -----*/

const wordArray = [
    'banana',
    'orange',
    'grape',
    'kiwi',
    'pear',
    'melon',
    'lemon',
    'peach',
    'plum',
    'carrot',
    'onion',
    'tomato',
    'potato',
    'broccoli',
    'apple',
    'cucumber'
];

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
    for (let i = 0; i < secretWord.length; i++) {
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
    displaySpaceman();
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
    const lowerCase = keyedin.key.toLowerCase(keyedin.key);
    const letter = secretWordArr.find((element) => element === lowerCase);
    if (correctLetters.length === secretWordArr.length || wrongletters.length === 6) {
        buildGuess();
    } else if (letter === undefined) {
        wrongletters.push(lowerCase);
        wronglettersEl.innerHTML = ` ${wrongletters}`;
        guessesleft--;
    } else {
        for (let i = 0; i < secretWordArr.length; i++) {
            if (secretWordArr[i] === lowerCase) {
                const div = document.getElementById(`${i}`);
                div.innerHTML = lowerCase;
                div.style.fontSize = '80px';
                div.style.border = 'none';
                correctLetters.push(lowerCase);
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
        messageEl.innerHTML = `You have ${guessesleft} guesses left`;
        displaySpaceman();
    }
}

function displaySpaceman() {
    spaceman.src = `images/${guessesleft}.png`
}
