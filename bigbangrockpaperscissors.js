/*Starts the initial user input */
var userChoice = prompt("Do you choose rock, paper or scissors?");


/* A loop check ensure correct input is given */
while (userChoice != "rock" && userChoice != "scissors" && userChoice != "paper") {
    userChoice = prompt("Wrong selection. Please select from rock, paper or scissors.");
}



/*These calculate the random computer's input */
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 

/*console.log("The User has chosen: " + userChoice);
console.log("The computer has chosen: " + computerChoice);*/


/* a loop to restart if there is a tie. still working on this one */
while (userChoice === computerChoice) {
    userChoice = prompt("The result is a tie. Let's try again. Select rock scissors or paper.");
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



/* This calls the function and prints the result to the browser */
document.write(compare(userChoice, computerChoice));