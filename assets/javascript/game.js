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


// Valid choices in array
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for everything other than choices array
var wins = 0;
var losses = 0;
var chancesLeft = 8; //Use 8 for now, can change later

var computerReveal = [];

var guessedLetters = [];


// Does this ENTIRE thing go in ONE function??

// Stores letter from user pressing key on keyboard
document.onkeyup = function(event) {
        var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
        	console.log(playerGuess);

        	guessedLetters.push(playerGuess)
        	document.getElementById('#game').innerHTML = guessedLetters.toString('<p>Letters you\'ve guessed: </p>');


        	// Put here? the limits on what's a letter vs not?
        	/*
        	if (playerGuess === [choices.indexOf]) {  //This isn't working...
        		console.log(playerGuess);
        	} else {
        		alert('Hey dummy, choose a letter!');
        	}
        	*/

        // Has computer choose from array options
        // Needs to NOT pick new letter each time!!!!!!

        var computerGuess = choices[Math.floor(Math.random() * choices.length)];

        console.log(computerGuess);

// Needs a FOR loop, to determine how many times to allow guesses

	//	for ()


     	// Variable to store the scoring in html on page
/*
     	var html = '<p>Press r (for rock), p (for paper), or s (for scissors) to start playing!</p>' +
     	"<p>Wins: " + wins + "</p>" +
     	"<p>Losses: " + losses + "</p>" +
     	"<p>Ties: " + ties + "</p>";

     	document.querySelector('#game').innerHTML = html;

    }
*/

}  // Closes the whole function, starting at document.onkeyup






        // Trying piece from jsfiddle, wtf does '$' mean in js??
        /*	$('body').append('<p>The computer chose: ' + computerChoice + '</p>');

    } */