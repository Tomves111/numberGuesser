//game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;
//ui elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

//listen for guess
guessBtn.addEventListener('click', function(){
 let guess =  parseInt(guessInput.value);
 //validate
 if(isNaN(guess) || guess < min || guess > max){
setMessage(`Please enter a number between ${min} and ${max}`, 'red')
 }
 //check if won
 if(guess === winningNum){
     //game over won
gameOver(true, `${winningNum} is correct, You win`);
    // //disabled input
    // guessInput.disabled = true;
    // //change border color
    // guessInput.style.borderColor = 'green';
    // //set message
    // setMessage(`${winningNum} is correct, You win`, 'green');
 }else{
//wrong number
guessesLeft -= 1;

if(guessesLeft === 0){
//game over lost
gameOver(false, `Game Over, You lost. The correct number was ${winningNum}`);
//disabled input
guessInput.disabled = true;
//change border color
guessInput.style.borderColor = 'red';
//set message
setMessage(`Game Over, You lost. The correct number was ${winningNum}`, 'red');
}else{
    //game continues - answer wrong

    //change border color
    guessInput.style.borderColor = 'red';
    //clear input
    guessInput.value = '';

    //tell user thats the wrong number
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
}
 }
});
//game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green': color = 'red';


     //disabled input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    //change text color
    message.style.color = color;
    //set message
    setMessage(msg);
    //play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}
//get  winning num
function getRandomNum(min, max){
   return Math.floor(Math.random()*(max-min+1)+min);
}
//set messsage
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
} 