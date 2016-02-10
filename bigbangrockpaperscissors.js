/*Starts the initial user input */
var userChoice = prompt("Do you choose rock, paper, scissors, lizard or spock?");


/* A loop check ensure correct input is given */
while (userChoice != "rock" && userChoice != "scissors" && userChoice != "paper" && userChoice != "lizard" && userChoice != "spock") {
    userChoice = prompt("Wrong selection. Please select from rock, paper, scissors, lizard or spock.");
}

/*This generates the first random computer input to allow the first while loop to compare for a tie.

I still think there is a way to remove the code duplication here by adding a function. Let's work out how to do this.

*/
    var computerChoice = Math.random();
    if (computerChoice < 0.21) {
        computerChoice = "rock";
    } 
    else if(computerChoice <= 0.41) {
        computerChoice = "paper";
    }
    else if(computerChoice <= 0.61) {
        computerChoice = "scissors";
    } 
    else if(computerChoice <= 0.81) {
        computerChoice = "lizard";
    } 
    else {
        computerChoice = "spock";
    } 

/* This while loop looks for a tie in the user and computer input. If there is it runs the computer input again.*/
while (userChoice === computerChoice) {
    userChoice = prompt("The result is a tie. Let's try again. Select rock scissors or paper.");
            var computerChoice = Math.random();
            if (computerChoice < 0.21) {
                computerChoice = "rock";
            }
            else if(computerChoice <= 0.41) {
                computerChoice = "paper";
            }
            else if(computerChoice <= 0.61) {
                computerChoice = "scissors";
            }
            else if(computerChoice <= 0.81) {
                computerChoice = "lizard";
            }
            else {
                computerChoice = "spock";
            }
        }


/* the compare function that defines which input wins */
var compare = function(uchoice, cchoice) {
    if (uchoice === "rock") {
        if (cchoice === "scissors") {
            return "rock wins";
        }
        else if (cchoice === "paper") {
            return "paper wins";
        }
        else if (cchoice === "lizard") {
            return "rock wins";
        }
        else {
            return "spock wins";
        }
    }
    else if (uchoice === "paper") {
        if (cchoice === "scissors") {
            return "scissors wins";
        }
        else if (cchoice === "rock") {
            return "paper wins";
        }
        else if (cchoice === "lizard") {
            return "lizard wins";
        }
        else {
            return "paper wins";
        }
    }
    else if (uchoice === "scissors") {
         if (cchoice === "paper") {
            return "scissors wins";
        }
        else if (cchoice === "rock") {
            return "rock wins";
        }
        else if (cchoice === "lizard") {
            return "scissors wins";
        }
        else {
            return "spock wins";
        }
    }
    else if (uchoice === "lizard") {
         if (cchoice === "paper") {
            return "lizard wins";
        }
        else if (cchoice === "rock") {
            return "rock wins";
        }
        else if (cchoice === "scissors") {
            return "scissors wins";
        }
        else {
            return "spock wins";
        }
    }
    else {
         if (cchoice === "paper") {
            return "paper wins";
        }
        else if (cchoice === "rock") {
            return "spock wins";
        }
        else if (cchoice === "scissors") {
            return "spock wins";
        }
        else {
            return "lizard wins";
        }
    }
}

document.write("The computer selected " + computerChoice);
document.write("The user selected " + userChoice);

/* This calls the function and prints the result to the browser */
document.write(compare(userChoice, computerChoice));