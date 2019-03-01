var wins = 0;
var losses = 0;
var guessedLetter = [];
var guessesLeft = 8;
var computerChoice = "";
var availableChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//The computer picks a random letter
var random = Math.floor(Math.random() * availableChoices.length)
var computerChoice = availableChoices[random];
console.log(computerChoice);

//Listens for imput from user
document.onkeyup = function (event) {
    var playerGuess = event.key;
    console.log(playerGuess);

    if (playerGuess == computerChoice) {
        wins++
        guessesLeft = 8;
        guessedLetter = [];
    }
    if (playerGuess !== computerChoice) {
        guessesLeft--;
    }
    if (guessesLeft == 0) {
        losses++
        guessesLeft = 8;
        guessedLetter = [];
    } else {
        guessedLetter.push(playerGuess);
        console.log(guessedLetter);
    }

    //talks to html
    document.getElementById("won").innerHTML = wins;
    document.getElementById("lost").innerHTML = losses;
    document.getElementById("attempts").innerHTML = guessedLetter;
    document.getElementById("lives").innerHTML = guessesLeft;
};
