function getComputerChoice() {
    const choices =['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie!";
        // rock - rock; scissors - scissors; paper - paper;
    }

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats scissors.";
        // rock beats scissors
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats paper.";
        // scissors beats paper
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats rock.";
        // paper beats rock
    }

    computerScore++;
    return `Computer wins! ${computerChoice} beats ${humanChoice}.`;
}

let humanScore = 0, computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        document.getElementById("result").textContent = result;
        document.getElementById("player-choice").textContent = `Player: ${humanChoice}`;
        document.getElementById("computer-choice").textContent = `Computer: ${computerChoice}`;
        document.getElementById("score").textContent = `Score - You: ${humanScore} Computer: ${computerScore}`;

        if (humanScore === 5) {
            alert("Congratulations! You won the game!");
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            alert("Game over! The computer won.");
            humanScore = 0;
            computerScore = 0;
        }
        
        document.getElementById("player-choice").textContent = `Player: ${humanChoice}`;
        document.getElementById("computer-choice").textContent = `Computer: ${computerChoice}`;
        document.getElementById("score").textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
    });
});