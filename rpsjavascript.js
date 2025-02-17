console.log("Hello, World!");

// Function to generate the computer's choice
function getCompChoice() {
    const numb = Math.floor(Math.random() * 100);
    if (numb <= 33) {
        return "rock";
    } else if (numb <= 66) {
        return "paper";
    } else {
        return "scissor";
    }
}

// Function to get the human's choice
function getHumanChoice() {
    const choice = String(prompt("Choose Rock/ Paper/ Scissor ?")).toLowerCase().trim();
    return choice;
}

// Initialize the scores for the game
let humanScore = 0;
let compScore = 0;

// Function to play one round
function playRound(compChoice, humanChoice) {
    if (compChoice === humanChoice) {
        console.log("Tie!");
    }
    // Rock vs Paper/Scissors
    else if (compChoice == "rock") {
        if (humanChoice == "scissor") {
            compScore += 1;
            console.log(`Computer Wins! score: ${compScore}`);
        } else if (humanChoice == "paper") {
            humanScore += 1;
            console.log(`Human Wins! score: ${humanScore}`);
        }
    }
    // Paper vs Rock/Scissors
    else if (compChoice == "paper") {
        if (humanChoice == "rock") {
            compScore += 1;
            console.log(`Computer Wins! score: ${compScore}`);
        } else if (humanChoice == "scissor") {
            humanScore += 1;
            console.log(`Human Wins! score: ${humanScore}`);
        }
    }
    // Scissors vs Rock/Paper
    else if (compChoice == "scissor") {
        if (humanChoice == "paper") {
            compScore += 1;
            console.log(`Computer Wins! score: ${compScore}`);
        } else if (humanChoice == "rock") {
            humanScore += 1;
            console.log(`Human Wins! score: ${humanScore}`);
        }
    } else {
        console.log("Something weird happened.");
    }
}

// Loop to play 5 rounds
for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);
    let compChoice = getCompChoice();
    let humanChoice = getHumanChoice();
    playRound(compChoice, humanChoice);
    console.log(`Computer's Choice: ${compChoice}`);
    console.log(`Human's Choice: ${humanChoice}`);
    console.log(`Current Score - Human: ${humanScore}, Computer: ${compScore}`);
    console.log('-------------------------------------');
}

// After all rounds, declare the final winner
if (humanScore > compScore) {
    console.log("Human is the Final Winner!");
} else if (compScore > humanScore) {
    console.log("Computer is the Final Winner!");
} else {
    console.log("It's a tie after 5 rounds!");
}
