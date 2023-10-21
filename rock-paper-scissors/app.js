const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const table = document.querySelector('.score')
const gameElements = ["rock", "paper", "scissors"]

rock.addEventListener

rock.addEventListener("click", 
    function(){
        console.log("Player: rock")
        console.log("computer:", gameElements[getRandomInt(3)] )
    }
)
paper.addEventListener("click",
    function () {
        console.log("Player: paper")
        console.log("computer:", gameElements[getRandomInt(3)] )
    }
  )

scissors.addEventListener("click",
    function () {
        console.log("Player: scissors")
        console.log("computer:", gameElements[getRandomInt(3)] )
    }
)


function getRandomInt(max) {
    return Math.floor(Math.random() * max);  
    
  }


function playRound(player, computer) {
    if(player === rock && computer === scissors) {
        console.log("player: won")
    }else if (player === scissors && computer === paper) {
        console.log("player: won")
    }else if (player === rock && computer === rock){
        console.log("Tie")
    }else if (player === paper && computer === paper){
        console.log("Tie")
    }else if (player === scissors && computer === scissors){
        console.log("Tie")
    }else {
        console.log("computer: won")
    }

}
playRound()
