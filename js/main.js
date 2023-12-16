/*----- constants -----*/
const wordArray = ['fun', 'running', 'sound', 'aaaaaaa'];

/*----- state variables -----*/
let guessesleft; 
let wordguess;


/*----- cached elements  -----*/


/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', buildguess);


/*----- functions -----*/

function render() {
    setupBoard();    
}