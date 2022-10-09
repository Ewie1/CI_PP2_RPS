
function main(){
    let pScore = 0;
    let cScore = 0;
    //call inner functions
   gameIntro();
    runGame();
    winGame();
    loseGame();
    gameOver();
    restartGame();
      // funtion to fade intro page
function gameIntro (){
      let playBtn = document.querySelector(".intro button");
      let introScreen = document.querySelector(".intro");
      let match = document.querySelector(".game");
  
      playBtn.addEventListener("click", function(){
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //function to run game
function  runGame(){
    let options = document.querySelectorAll(".selections button");
    let playerImage = document.querySelector(".player-image");
    let computerImage = document.querySelector(".computer-image");
    let computerOptions =["rock", "paper", "scissors"];

   for (let i = 0; i < options.length; i++){
            options[i].addEventListener("click", function(){
                let computerNumber = Math.floor(Math.random() * 3);
                let computerSelection = computerOptions[computerNumber];
                //Call checkWinner here
              checkWinner(this.id, computerSelection);
                // display selected images
            playerImage.src = `assets/images/${this.id}.png`;
            console.log(this.id)
          computerImage.src = `assets/images/${computerSelection}.png`;
            })
       }
}
// Function to determine scores
function scoreResults (){
  let playerScore = document.getElementById("player-score");
  let computerScore = document.getElementById("computer-score");
  playerScore.innerText = pScore;
  computerScore.innerText = cScore; 
} 
//Function to determine winner or loser
function checkWinner (playerSelection, computerSelection) {
    //Update Text
    let displayResult = document.querySelector(".results");
    //Checking for a tie
    if (playerSelection === computerSelection) {
      displayResult.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerSelection === "rock" && computerSelection === "scissors") {
        displayResult.textContent = "Youu Wins!!";
        pScore++;
        scoreResults();
        return;
      } else if (playerSelection === "rock" && computerSelection === "paper") { 
        displayResult.textContent = "You lose!";
        cScore++;
        scoreResults();
        return;
      }
  //Check for Paper
    if (playerSelection === "paper" && computerSelection === "scissors") {
        displayResult.textContent = "You lose!";
        cScore++;
        scoreResults();
        return;
      } else if(playerSelection === "paper" && computerSelection === "rock"){
        displayResult.textContent = "Youu Win!!";
        pScore++;
        scoreResults();
        return;
      }
    //Check for Scissors
    if (playerSelection === "scissors" && computerSelection === "rock") {
        displayResult.textContent = "You lose!";
        cScore++;
        scoreResults();
        return;
      } else if(playerSelection === "scissors" && computerSelection === "paper") {
        displayResult.textContent = "Youu Win!!";
        pScore++;
        scoreResults();
        return;
      }
    }
    /**Win game function
     * Stop click selection at max pscore value
     * Fade out match screen and fade in restart screen
     */
function winGame(){
  pScore++;
  let playerScore = document.getElementById("player-score");
  let computerScore = document.getElementById("computer-score");
  let match = document.querySelector(".game");
  let restartScreen = document.querySelector(".restart-game")
  playerScore.innerText = pScore;
  computerScore.innerText = cScore; 
  if(pScore === 3){
    match.classList.add("fadeOut");
        restartScreen.classList.add("fadeIn");
    gameOver();
  }
}

    /**lose game function
     * Stop click selection at max cscore value
     * Fade out match screen and fade in restart screen
     */
function loseGame(){
  cScore++;
  let playerScore = document.getElementById("player-score");
  let computerScore = document.getElementById("computer-score");
  let match = document.querySelector(".game");
  let restartScreen = document.querySelector(".restart-game")
  playerScore.innerText = pScore;
  computerScore.innerText = cScore; 
  if (cScore === 3){
    match.classList.add("fadeOut");
    restartScreen.classList.add("fadeIn");
    gameOver();
  }
}
/**Game over function
 * Prevent actions when selections are clicked
 */
 
function gameOver(){
  let options = document.querySelectorAll(".selections button");

 for (let i = 0; i < options.length; i++){
          options[i].addEventListener("click", function(){})
        }
}
/**
 * Fades in restart screen
 */
function restartGame(){
  let playAgain = document.querySelector(".restart-game button");
      let restartScreen = document.querySelector(".restart-game");
      let match = document.querySelector(".game");
  
      playAgain.addEventListener("click", function(){
        restartScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      }); 
}
  }
// call main function
main();