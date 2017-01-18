/**
 * Created by Owner on 2017-01-18.
 */

var userChoice = prompt("Do you choose rock, paper or scissors");
console.log("User's choice "+userChoice);

var computerChoice = Math.random();
//console.log(computerChoice);

if(computerChoice >=0 && computerChoice <= 0.33)
    computerChoice = 'rock';

else if(computerChoice >= 0.34 && computerChoice <= 0.66)
    computerChoice = 'paper';

else
    computerChoice = 'scissors';

console.log("Computer's choice: "+computerChoice);

function compare(choice1, choice2){
    if(choice1===choice2)
        return "The result is a tie";

    else if(choice1==='rock'){
        if(choice2==='scissors')
            return "The user wins";
        else
            return "The computer wins";
    }

    else if(choice1==='paper'){
        if(choice2==='scissors')
            return "The computer wins";
        else
            return "The user wins";
    }

    else{
        if(choice2==='rock')
            return "The computer wins";
        else
            return "The user wins";
    }
}

compare(userChoice, computerChoice);

