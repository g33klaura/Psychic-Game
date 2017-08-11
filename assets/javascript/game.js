// Valid letter choices in array
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for everything else
var wins = 0;
var losses = 0;

var chancesLeft = 9;

var lettersGuessed = [];

// Want to show the computer choice when player loses
// THIS need to be part of a function, there the computerChoice gets stored. Then can be called
var computerReveal = null;

// Computer chooses letter from array options
var computerChoice = choices[Math.floor(Math.random() * choices.length)];
	// for testing, then delete!!!!!
	console.log(computerChoice);

/* Sound would've been cool.... 
var puppetLaugh = new sound('puppet_laugh.mp3');
*/

// Stores letter from user pressing key on keyboard
document.onkeyup = function(event) {
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    	if (playerGuess === 'a' || playerGuess === 'b' || playerGuess === 'c' || playerGuess === 'd' || playerGuess === 'e' || playerGuess === 'f' || playerGuess === 'g' || playerGuess === 'h' || playerGuess === 'i' || playerGuess === 'j' || playerGuess === 'k' || playerGuess === 'l' || playerGuess === 'm' || playerGuess === 'n' || playerGuess === 'o' || playerGuess === 'p' || playerGuess === 'q' || playerGuess === 'r' || playerGuess === 's' || playerGuess === 't' || playerGuess === 'u' || playerGuess === 'v' || playerGuess === 'w' || playerGuess === 'x' || playerGuess === 'y' || playerGuess === 'z') {
    		
    		// for testing, then delete!!!!!
    		console.log('You guessed: ' + playerGuess);

    		chancesLeft--;

    		// Letters get printed as they're selected, but lags by one letter..........  ~FIXED
			lettersGuessed.push(event.key);
    		document.getElementById('lettersGuessed').innerHTML = 'Letters you\'ve guessed: ' + lettersGuessed.join(', ');
    		// Patrick suggestion- loop through letters, and add each letter to the lettersGuessed element on HTML,  with += (get rid of join)

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

	// How to hide "Letter to guess" part til needed?......
	computerReveal = null;
	function hideShow() {
		var x = document.getElementById('computerReveal');
		if (x.style.display === 'none') {
			x.style.display = 'block';
		} else {
			x.style.display = 'none';
		}
	}
	//document.getElementById('computerReveal').style.display = 'block';
	//document.getElementById('computerReveal').style.display = 'none';
}


//function updateScore() {
// Create function to update parts of score? Then call function in if/else statement?

function updateWins() {
	wins++;
	document.getElementById('wins').innerHTML = 'WINS: ' + wins;
	alert('You survived.');
	
	// Add letter computer chose to HTML 
	computerReveal = computerChoice;
	document.getElementById('computerReveal').innerHTML = 'Letter I Chose: ' + computerChoice;


	// Computer makes new letter choice as part of this function (better practice to make it's own function next project)
	 computerChoice = choices[Math.floor(Math.random() * choices.length)];
	 console.log(computerChoice);
}

function updateLosses() {
	losses++;
	document.getElementById('losses').innerHTML = 'LOSSES: ' + losses;

	//puppetLaugh.play();

	alert('You died.');
	
	// Add letter computer chose to HTML 
	computerReveal = computerChoice;
	document.getElementById('computerReveal').innerHTML = 'Letter I Chose: ' + computerChoice;
	

	// Computer makes new letter choice
	 computerChoice = choices[Math.floor(Math.random() * choices.length)];
	 console.log(computerChoice);
}

//Stats update but lag behind by 1. (starts wins at 0......)  ~FIXED

// New problem: not logging the win/loss until the 10th letter guess

if (chancesLeft >= 0) {
  if (playerGuess === computerChoice) {
  	console.log('Well done. You survived with ' + chancesLeft + ' chances to spare.');
  	//console.log('You\'ve won ' + wins++ + ' times.');
  	//document.getElementById('wins').innerHTML = wins++;
  	
  	updateWins();
  	document.getElementById('wins').innerHTML = 'Times you\'ve survived: ' + wins;

  	reWriteStats();
  
  } else {

  	console.log('Nope.');
//  	console.log('You have ' + chancesLeft-- + ' chances left.');
// Still need to get chances left displayed on HTML  ~FIXED
	document.getElementById('chancesLeft').innerHTML = 'Chances you have left: ' + chancesLeft;

  }

} else {
	console.log('You\'re dead.');
	
    updateLosses();
	//console.log('You\'ve died ' + losses + ' times.');
    document.getElementById('losses').innerHTML = 'Times you\'ve died: ' + losses;

	reWriteStats();

	// Reeeeally wanted creepy jigsaw laugh here *sad face*
}
//}

}
// End of actual game code!!!



/* Other things I'd tried........

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

 //Displays chances, but incriments by several.... damn that jigsaw
 /*   document.getElementById('chancesLeft').innerHTML = 'Chances left: ' + chancesLeft--;
 */
    //chancesLeft.push(event.key);

