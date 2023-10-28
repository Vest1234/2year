const rockElement = document.getElementById("rock")
const paperElement = document.getElementById("paper")
const scissorsElement = document.getElementById("scissors")
const rock = "rock"
const paper = "paper"
const scissors = "scissors"
const table = document.querySelector('.score')
const gameElements = ["rock", "paper", "scissors"]
let player = "player"


rockElement.addEventListener("click", 
    function(){
        console.log("Player: rock")
        player = "rock"
        computer = gameElements[getRandomInt(3)]
        console.log("computer:", computer )
        playRound(player, computer)

    }
)
paperElement.addEventListener("click",
    function () {
        console.log("Player: paper")
        player = "paper"
        computer = gameElements[getRandomInt(3)]
        console.log("computer:", computer )
        playRound(player, computer)
    }
  )

scissorsElement.addEventListener("click",
    function () {
        console.log("Player: scissors")
        player = "scissors"
        computer = gameElements[getRandomInt(3)]
        console.log("computer:", computer )
        playRound(player, computer)
    }
)


function getRandomInt(max) {
    return Math.floor(Math.random() * max);  
    
  }


function playRound(player, computer) {
    if       (player === rock && computer === scissors) {
        console.log("player: won")
    }else if (player === scissors && computer === paper) {
        console.log("player: won")
    }else if (player === paper && computer === rock) {
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




