const resetButton = document.querySelector('#reset-btn');
const statusMessage = document.querySelector('#status-message');

function generateGameDom(contents, elem = "div", elementClass='') {
    const gameDom = document.createElement(elem);
    //gameDom.textContent = contents;
    if (elementClass.length>0) {
        gameDom.classList.add(elementClass);
    };
    contents.split('').forEach(characeter=>{
        const newSpan=document.createElement('span');
        newSpan.textContent = characeter;
        gameDom.appendChild(newSpan);
    })
    //gameDom.classList.add('puzzle');
    //gameDom.textContent.style.fontSize = "x-large";
    //gameDom.style.color = color;
    return gameDom;
}
const renderStatus = (game) => {

}
const renderGame = (game)=>{
    //game.updateStatus();
    const puzzleElement = document.querySelector("#puzzle");
    puzzleElement.innerHTML = "";
    puzzleElement.appendChild(generateGameDom(game.puzzle,"h2",'puzzle'));
    //puzzleElement.appendChild(game.statusMessage);
    statusMessage.textContent = '';
    statusMessage.textContent = game.statusMessage;

}



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
