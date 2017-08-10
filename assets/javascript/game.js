// Valid letter choices in array
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for everything else
var wins = 0;
var losses = 0;
var chances = 9;
var chancesLeft = 9;

var lettersGuessed = [];
var computerReveal = null;

// Computer chooses letter from array options
var computerChoice = choices[Math.floor(Math.random() * choices.length)];
	// for testing, then delete!!!!!
	console.log(computerChoice);


// Stores letter from user pressing key on keyboard
document.onkeyup = function(event) {
	chancesLeft--;
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // for testing, then delete!!!!!
    console.log(playerGuess);

    lettersGuessed.push(playerGuess);
    updateChances();
    updateLettersGuessed();

    	if (chancesLeft > 0) {
    		if (playerGuess === computerChoice) {
    			wins++;
    		//	document.getElementById('wins').innerHTML = wins;
    			console.log('You won!');
    			reset();
    		}
    	} else {
    		losses++;
    	//	document.getElementById('losses').innerHTML = losses;
    		console.log('You\'ve died.');
    		reset();
    	}

} 


// Update chances player has left on html
var updateChances = function() {
	document.getElementById('chancesLeft').innerHTML = htmlChances + chancesLeft;
};

// Computer chooses new letter on reset********
var newComputerChoice = function() {
	this.computerReveal = this.computerChoice[Math.floor(Math.random() * this.computerChoice.length)];
};

// Display guessed letters on html
var updateLettersGuessed = function() {
	document.getElementById('lettersGuessed').innerHTML = 'LETTERS YOU\'VE GUESSED: ' + lettersGuessed.join(', ');
};


newComputerChoice();
updateChances();


// Function to reset the game
var resetGame = function() {
	chances = 9;
	chancesLeft = 9;
	lettersGuessed = [];

	updateChances();
	newComputerChoice();
	updateLettersGuessed();
}

var htmlChances = 'You have this many chances remaining: ';


    // Variable to store the scoring in html on page
    /*
         	var html = '<p>Press r (for rock), p (for paper), or s (for scissors) to start playing!</p>' +
         	"<p>Wins: " + wins + "</p>" +
         	"<p>Losses: " + losses + "</p>" +
         	"<p>Ties: " + ties + "</p>";

         	document.querySelector('#game').innerHTML = html;

        }
    */





// Trying piece from jsfiddle, wtf does '$' mean in js??
/*	
$('body').append('<p>The computer chose: ' + computerChoice + '</p>');

    } 
    If this is going at the very end of the function, the brace above will close it all out */

// Other things I tried........

    /*  Trying to get lettersGuessed to populate on the page
        	lettersGuessed.push(playerGuess);
        	document.getElementById('#game').textContent += lettersGuessed.toString('<p>Letters you\'ve guessed: </p>');
			*/

    // Put here? the limits on what's a letter vs not?
    /*
    if (playerGuess === [choices.indexOf]) {  //This isn't working...
    	console.log(playerGuess);
    } else {
    	alert('Hey dummy, choose a letter!');
    }
    */

    // Needs a FOR loop, to determine how many times to allow guesses

    //	for ()