//Hangman class
class Hangman {
    constructor(word, guessesLeft, guessedLetters=[]) {
        this.word = word.toLowerCase().split('');
        this.guessedLetters = guessedLetters;
        this.guessesLeft = guessesLeft;
        this.status = 'playing';
    }
    get puzzle(){
        let puzzle = '';
        this.word.forEach((letter)=>{
            if (this.guessedLetters.includes(letter) || letter ===' ') {
                puzzle += letter;
            }else{
                puzzle += '*';
            }
        });
        return puzzle;
    }
    guess(letterGuess){
        if (this.status === 'finished' || this.status === 'failed') {
            return;
        };
        letterGuess = letterGuess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(letterGuess);
        const isBadGuess = !this.word.includes(letterGuess);

        if (isUnique) {
            this.guessedLetters.push(letterGuess);
            if (isBadGuess) {
                this.guessesLeft--;
            }
        };
        this.updateStatus();
    }
    updateStatus(){
        if (this.guessesLeft === 0) {
            this.status = 'failed'
        }else if (!this.puzzle.includes('*')) {
            this.status = 'finished';
        }
    }

    get statusMessage(){
        if (this.status === 'playing') {
            return generateGameDom(`guesses left: ${this.guessesLeft}`, 'h5');
        };
        if (this.status === 'finished') {
            return generateGameDom("You got it", 'h5', 'blue');
        };
        return generateGameDom(`You failed, the word was "${this.word.join('')}"`,'h5', 'red');
    }
}


    
//end of Hangman
//utility functions

function generateGameDom(contents, elem = "h3", color='black') {
    const gameDom = document.createElement(elem);
    gameDom.textContent = contents;
    gameDom.style.color = color;
    return gameDom;
}

const renderGame = (game)=>{
    //game.updateStatus();
    const puzzleElement = document.querySelector("#puzzle");
    puzzleElement.innerHTML = "";
    puzzleElement.appendChild(generateGameDom(game.puzzle));
    puzzleElement.appendChild(game.statusMessage);
}