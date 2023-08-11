

// getPuzzle((err, puzzle)=>{
//     if (err) {
//         alert(err);
//         return;
//     };
//     const game = new Hangman(puzzle, 8);
//     renderGame(game);
//     window.addEventListener('keydown', (e)=>{
//         //console.log(typeof e.key);
//         game.guess(e.key);
//         renderGame(game);
//         //console.log("guesses left " + game.guessesLeft);
//     });
// });


// getPuzzle().then((newPuzzle)=>{
//     const game = new Hangman(newPuzzle, 8);
//     renderGame(game);
//     window.addEventListener('keydown', (e)=>{
//         //console.log(typeof e.key);
//         game.guess(e.key);
//         renderGame(game);
//         //console.log("guesses left " + game.guessesLeft);
//     });
// }, (err)=>{
//     alert(err);
// })
//getPuzzle using fetch
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
//Fetch api
// fetch('https://puzzle.mead.io/puzzle',{}).then((response)=>{
//     if (response.status === 200) {
//         return response.json();
//     }else{
//         throw new Error(`response status: ${response.status}`)
//     }
// }).then((data)=>{
//     console.log(`Puzzle from fetch: ${data.puzzle}`);
// }).catch((err)=>{
//     console.log(err);
// })

// const game = new Hangman(getPuzzle(), 5);
// //console.log(game.getPuzzle());
// renderGame(game);


// window.addEventListener('keydown', (e)=>{
//     //console.log(typeof e.key);
//     game.guess(e.key);
//     renderGame(game);
//     //console.log("guesses left " + game.guessesLeft);
// })

//requests
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', (e)=>{
   
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         console.log(JSON.parse(e.target.responseText));
//     }else if (e.target.readyState === 4){
//         console.log("there has been an error");
//     }
// })

// request.open('GET','https://puzzle.mead.io/puzzle');
// request.send();
