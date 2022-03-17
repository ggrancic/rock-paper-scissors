function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let play = options[Math.floor(Math.random() * 3)];
    return play;
}

function evalUserSel(sel) {
    return sel === 1 || sel === 2 || sel === 3 || false;
}

function convertUserSel(userInput) {
    if (userInput === 1) {
        return "rock";
    } else if (userInput === 2) {
        return "paper";
    } else {
        return "scissors"
    
    }
}


function playGame(computerPlay, userPlay) {
    let result = 0;
    if (computerPlay === userPlay) {
        result = 1;
    } else if (computerPlay === 'scissors' && userPlay === 'paper' ||
    computerPlay === 'rock' && userPlay === 'scissors' ||
    computerPlay === 'paper' && userPlay === 'rock') {
        result = 2;
    } else {
        result = 3;
    }
    
    return result;
}

function checkWinner(computerScore, userScore) {
    if (computerScore > userScore) {
        return "COMPUTER WINS";
    } else if (userScore > computerScore) {
        return "YOU WIN";
    } else {
        return "NOBODY";
    }
}

function main() {
    let userScore = 0;
    let computerScore = 0;
    let i = 0;

    while (userScore < 5 && computerScore < 5){
        i++;
        let userChoice = parseInt(prompt("Choice the number:\n1) Rock\n2) Paper\n3) Scissors"));
        if (evalUserSel(userChoice) === false) {
            console.log("WRONG INPUT");
        } else {
            console.log(`Round ${i}`)
            let computer = computerPlay();
            let user = convertUserSel(userChoice);
            let game = playGame(computer, user);
            if (game === 1) {
                console.log("Tie");
            } else if (game === 2){
                console.log(`You lost! Computer's ${computer.toUpperCase()} beats your ${user.toUpperCase()}.`);
                computerScore++;
            } else {
                console.log(`You won! Your ${user.toUpperCase()} beats computer's ${computer.toUpperCase()}.`);
                userScore++;
            }
        }
        console.log(`Your score is ${userScore}`);
        console.log(`Computer's score is ${computerScore}`);
    }
    console.log(checkWinner(computerScore, userScore));
}

main();