function getComputerChoice() {
    const choices =['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getUserChoice() {
    const choice = prompt("Enter your choice (rock, paper, or scissors):");
    return choice.toLowerCase();
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

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        let humanChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice, humanScore, computerScore));
    }
}

let humanScore = 0, computerScore = 0;
playGame(humanScore, computerScore);

console.log(`Final score - You: ${humanScore}, Computer: ${computerScore}`);