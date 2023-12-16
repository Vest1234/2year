const rockElement = document.getElementById("rock")
const paperElement = document.getElementById("paper")
const scissorsElement = document.getElementById("scissors")
const rock = "rock"
const paper = "paper"
const scissors = "scissors"
const table = document.querySelector('.score')
const btnRestart = document.querySelector('.btnRestart')
const gameElements = ["rock", "paper", "scissors"]
const btnNomber = document.getElementById("buttonNomber")
const nomber1 = document.getElementById('nomber1')
const btnNickname = document.getElementById('buttonNickname')
const nicknameInput = document.getElementById('nicknameInput')
const yourNickname = document.getElementById('yourNickname')
const yourStatisticsElement = document.getElementById('your')
const computerStatisticsElement = document.getElementById('computerStatisticsElement')
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

let computerScore = 0
let playerScore = 0
let game = false
let maxRound = null
let nickName = null
let yourStatistics = 0
let computerStatistics = 0

btnNomber.addEventListener("click", function getNomber() {
    maxRound = nomber1.value
})




function playRound(player, computer) {
    if       (player === rock && computer === scissors) {
        console.log("player: won") 
        document.getElementById('result').innerText = 'ТЫ ПОБЕДИЛ В ЭТОМ РАУНДЕ!'
        playerScore++
        table.textContent = `Computer Score: ${computerScore} - Player Score: ${playerScore}`
    }else if (player === scissors && computer === paper) {
        console.log("player: won")
        document.getElementById('result').innerText = 'ТЫ ПОБЕДИЛ В ЭТОМ РАУНДЕ!'
        playerScore++
        table.textContent = `Computer Score: ${computerScore} - Player Score: ${playerScore}`
    }else if (player === paper && computer === rock) {
        console.log("player: won")
        document.getElementById('result').innerText = 'ТЫ ПОБЕДИЛ В ЭТОМ РАУНДЕ!'
        playerScore++
        table.textContent = `Computer Score: ${computerScore} - Player Score: ${playerScore}`
    }else if (player === rock && computer === rock){
        console.log("Tie")
        document.getElementById('result').innerText = 'НИЧЬЯ В ЭТОМ РАУНДЕ!'
    }else if (player === paper && computer === paper){
        console.log("Tie")
        document.getElementById('result').innerText = 'НИЧЬЯ В ЭТОМ РАУНДЕ!'
    }else if (player === scissors && computer === scissors){
        console.log("Tie")
        document.getElementById('result').innerText = 'НИЧЬЯ В ЭТОМ РАУНДЕ!'
    }else {
        console.log("computer: won")
        document.getElementById('result').innerText = 'КОМПЬЮТЕР ОБЫГРАЛ ТЕБЯ!'
        computerScore++
        table.textContent = `Computer Score: ${computerScore} - Player Score: ${playerScore}`
    }
    if (playerScore == maxRound || computerScore == maxRound) {
        game = true;
        table.textContent = `Game over: ${table.textContent}`;
        if (playerScore > computerScore) {
            result.textContent = `По результатам ${maxRound} игр: ИГРОК АБСОЛЮТНЫЙ ЧЕМПИОН`;
            yourStatistics++
            yourStatisticsElement.textContent = `${yourStatistics};`

        } else {
            result.textContent = `По результатам ${maxRound} игр: КОМПЬЮТЕР ТЕБЯ УНИЧТОЖИЛ`;
            computerStatistics++
            computerStatisticsElement.textContent = `Компьютер: ${computerStatistics};`

        }
}
}

function restartGame() {
    computerScore = 0
    playerScore = 0   
}

btnRestart.addEventListener("click", function(){
    restartGame()
    table.textContent = `Computer Score: ${computerScore} - Player Score: ${playerScore}`
    result.textContent = '';   
}
)


