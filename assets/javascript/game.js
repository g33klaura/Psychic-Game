// Valid letter choices in array
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for everything else
var wins = 0;
var losses = 0;

var chancesLeft = 9;

var lettersGuessed = [];

// Want to show the computer choice when player loses
var computerReveal = null;

// Computer chooses letter from array options
var computerChoice = choices[Math.floor(Math.random() * choices.length)];
	// for testing, then delete!!!!!
	console.log(computerChoice);

// Stores letter from user pressing key on keyboard
document.onkeyup = function(event) {
	//chancesLeft--;
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    	if (playerGuess === 'a' || playerGuess === 'b' || playerGuess === 'c' || playerGuess === 'd' || playerGuess === 'e' || playerGuess === 'f' || playerGuess === 'g' || playerGuess === 'h' || playerGuess === 'i' || playerGuess === 'j' || playerGuess === 'k' || playerGuess === 'l' || playerGuess === 'm' || playerGuess === 'n' || playerGuess === 'o' || playerGuess === 'p' || playerGuess === 'q' || playerGuess === 'r' || playerGuess === 's' || playerGuess === 't' || playerGuess === 'u' || playerGuess === 'v' || playerGuess === 'w' || playerGuess === 'x' || playerGuess === 'y' || playerGuess === 'z') {
    		
    		// for testing, then delete!!!!!
    		console.log('You guessed: ' + playerGuess);

    		

    		// Letters get printed as they're selected, but lags by one letter..........

    		document.getElementById('lettersGuessed').innerHTML = lettersGuessed.join(', ');
    		lettersGuessed.push(event.key);
    		
    		// Want it to not count letters already guessed...

    	} else {
    		alert('Hey dummy, choose a letter!');
    	}
     	

// Way to reset game
function reWriteStats() {
	chancesLeft = 9;
	lettersGuessed = [];
	// Something so computer picks a new letter?
	// Make computerChoice a function so it'll reset?
	// computerChoice();
}

// Create function to update parts of score? Then call function in if/else statement?
function updateWins() {
	document.getElementById('wins').innerHTML = 'WINS: ' + wins++;
}

function updateLosses(){
	document.getElementById('losses').innerHTML = 'LOSSES: ' + losses++;
}


//Stats update but lag behind by 1. (starts wins at 0......)
if (chancesLeft >= 0) {
  if (playerGuess === computerChoice) {
  	console.log('Well done. You survived with ' + chancesLeft + ' chances to spare.');
  	console.log('You\'ve won ' + wins++ + ' times.');
  	//document.getElementById('wins').innerHTML = wins++;
  	updateWins();
  	reWriteStats();
  
  } else {
  	console.log('Nope.');
  	console.log('You have ' + chancesLeft-- + ' chances left.');
  	/*
    document.getElementById('chancesLeft').innerHTML = chancesLeft--;
    chancesLeft.push(event.key);
	*/
  }

} else {
	console.log('You\'re dead.');
	console.log('You\'ve died ' + losses++ + ' times.');
	//document.getElementById('losses').innerHTML = losses++;
    updateLosses();
	reWriteStats();
	// Reeeeally wanted creepy jigsaw laugh here *sad face*
}
}



/* Other things I've tried........

console.log(lettersGuessed.push(playerGuess.join(', ')));
    		//document.getElementById('lettersGuessed').innerHTML = lettersGuessed.join(', ');

Trying to get lettersGuessed to populate on the page
        	lettersGuessed.push(playerGuess);
        	document.getElementById('#game').textContent += lettersGuessed.toString('<p>Letters you\'ve guessed: </p>');

// Variable to store the scoring in html on page from rps
         	var html = '<p>Press r (for rock), p (for paper), or s (for scissors) to start playing!</p>' +
         	"<p>Wins: " + wins + "</p>" +
         	"<p>Losses: " + losses + "</p>" +
         	"<p>Ties: " + ties + "</p>";

         	document.querySelector('#game').innerHTML = html;

        }
*/

