/* Steps needed for the game part
* Need variables for computerChoice, playerGuess, Wins, Losses, chancesLeft, guessedLetters, computerReveal
* Computer chooses a letter
*	- Keeps same letter for a number of playerGuess (a round)
* User guesses a letter by pressing it on the keyboard
* If valid letter:
* 	a) Guessed letters are recorded on page
* 	b) Guesses count against "number of guesses"
* If invalid letter:
* 	a) Prompt "not a letter!"
* 	b) Doesn't count against number of guesses
* If same letter already guessed, don't count against number of guesses
* Their choice either a) matches computer choice, or b) doesn't match
* 	a) If matches, Win gets logged, 
*			prompt win, new round begins
* 	b) If no match, Loss gets logged, 
*			prompt lose, new round begins
* WANT COMPUTER CHOICE TO SHOW ON PAGE NO MATTER WHAT before new round begins (computerReveal)
* Display game over before new round starts
*/


// Valid keyboard choices
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for everything other than choices array
var wins = 0;
var losses = 0;
var chancesLeft = 8;  //Use 8 for now, can change later
var guessedLetters = [];
var playerGuess = [];
var computerChoice = [];


// Still will need computerChoice, playerGuess, guessedLetters, computerReveal


// Stores letter from user pressing key on keyboard

    document.onkeyup = function(event) {
    	choices = event.key;
        playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

        console.log(playerGuess);
    
    // Has computer choose from array choices
    // Needs to NOT pick new letter each time!!!!!!

    	computerChoice = choices[Math.floor(Math.random()*choices.length)];

    	console.log(computerChoice);
    }

// Trying piece from jsfiddle, wtf does '$' mean in js??
	/*	$('body').append('<p>The computer chose: ' + computerChoice + '</p>');

    } */