/*Starts the initial user input */
var userChoice = prompt("Do you choose rock, paper or scissors?");


/* A loop check ensure correct input is given */
while (userChoice != "rock" && userChoice != "scissors" && userChoice != "paper") {
    userChoice = prompt("Wrong selection. Please select from rock, paper or scissors.");
}



/*This generates the first random computer input to allow the first while loop to compare for a tie. Needs work on moving it away from a function */
var randomcompChoice = function(computerChoice) {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        return "rock";
    } 
    else if(computerChoice <= 0.67) {
        return "paper";
    } 
    else {
        return "scissors";
    } 
}

var finalcompChoice = randomcompChoice();

/* This while loop looks for a tie in the user and computer input. If there is it runs the computer input again. This can be made without using a function I think*/
while (userChoice === finalcompChoice) {
    userChoice = prompt("The result is a tie. Let's try again. Select rock scissors or paper.");
        var randomcompChoice = function(computerChoice) {
            var computerChoice = Math.random();
                if (computerChoice < 0.34) {
                    return "rock";
                } 
                else if(computerChoice <= 0.67) {
                    return "paper";
                }
                else {
                    return "scissors";
                }
            }
            finalcompChoice = randomcompChoice();
        }


/* the compare function that defines which input wins */
var compare = function(choice1, choice2) {
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "scissors wins";
        }
        else {
            return "rock wins";
        }
    }
}

document.write("The computer selected " + finalcompChoice);
document.write("The user selected " + userChoice);

/* This calls the function and prints the result to the browser */
document.write(compare(userChoice, finalcompChoice));