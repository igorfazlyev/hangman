const resetButton = document.querySelector('#reset-btn');

const startGame = ()=>{
    getPuzzle().then((newPuzzle)=>{
        //const newPuzzle = data.puzzle
        const game = new Hangman(newPuzzle, 8);
        renderGame(game);
        window.addEventListener('keydown', (e)=>{
            //console.log(typeof e.key);
            game.guess(e.key);
            renderGame(game);
            //console.log("guesses left " + game.guessesLeft);
        });
    }).catch((err)=>{
        alert(err);
    })    
}

resetButton.addEventListener('click', ()=>startGame());


startGame()
