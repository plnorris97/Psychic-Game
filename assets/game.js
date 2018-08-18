// THE VARIABLES.
// define the variables for the computer

var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// computer selects random generated letter 
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

// Player gets 10 guesses for each game
var wins = 0;
var losses = 0;
var totalGuesses = 10;
var guessesLeft = 10;
var yourGuessesSoFar = [];
var computerLetter = null;



// THE FUNCTIONS. 
// When player guesses incorrectly, guesses left goes down by one.

function updateguessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
};
// Capture the letters the player guessed incorrectly
function updateyourGuessesSoFar() {
    document.querySelector("#yourGuessesSoFar").innerHTML = "Your Guesses so far: " + yourGuessesSoFar.join(', ');
};
function updateyourGuessesSoFar() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
};
// This function runs when game resets
function updatecomputerLetter() {
    this.computerGuess = this.computerChoice[Math.floor(Math.random() * this.computerChoice.length)];
};

// Reset the game board when player selects correct letter or when the player exhausts guesses count.
function reset() {
    totalGuesses = 10;
    guessesLeft = 10;
    yourGuessesSoFar = [];
    computerLetter = null;

    updatecomputerLetter();
    updateguessesLeft();
    updateyourGuessesSoFar();
}


// THE GAME.
// Player selects a key to start guessing.
    updateguessesLeft();
    
document.onkeyup = function (event) {
    var playerGuess = event.key;
    // If player guess matches computer guess, they win and the win tally goes up by one. Alert congrats & game resets.
    if (playerGuess === computerGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        alert("Congrats, you are psychic! I predicted " + playerGuess);
        reset();
    }
    // If the player continues choosing letters and their Guesses Left count reaches zero, the lose tally goes up by one. They lose the game & the game resets.
    else if(playerGuess !== computerGuess) {
        guessesLeft--;
        yourGuessesSoFar.push(playerGuess);
        document.getElementById("yourGuessesSoFar").innerHTML = "Your guesses so far: " + yourGuessesSoFar;

        if (guessesLeft === 0) {
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you lose. Game over");
    
            reset();   
        }
         updateguessesLeft();
        // updateyourGuessesSoFar();
    }
    // If the player guess does not equal the computer guess, Guesses Left goes down by one each time and letters guessed is captured in Your Guesses So Far. 
};
    


