// Valid letter choices in array
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for everything else
var wins = 0;
var losses = 0;
// var chances = 9; **do I need this variable?
var chancesLeft = 9;

var lettersGuessed = [];
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

    		// in here count down chancesLeft-- and print lettersGuessed to html?????
    		console.log(chancesLeft--);

    		// Letters get printed as they're selected, but lags by one letter..........

    		document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
    		lettersGuessed.push(event.key);
    		//console.log(lettersGuessed.push(playerGuess.join(', ')));
    		//document.getElementById('lettersGuessed').innerHTML = lettersGuessed.join(', ');

    	} else {
    		alert('Hey dummy, choose a letter!');
    	}
     	

  // not working..............
  //  console.log(lettersGuessed.push(playerGuess));

// Nothing resets the game yet
/* 
var reWriteStats = () => {

}
*/

if (chancesLeft >= 0) {
  if (playerGuess === computerChoice) {
  	console.log('Well done. You survived with ' + chancesLeft + ' chances to spare.');
  	console.log(wins++);
  	// reWriteStats();
  } else {
  	console.log('Nope.');
  }
} else {
	console.log('You\'re dead.');
	console.log(losses++);
	// reWriteStats();
	// Reeeeally wanted creepy jigsaw laugh here *sad face*
}
}




    // Variable to store the scoring in html on page from rps
    /*
         	var html = '<p>Press r (for rock), p (for paper), or s (for scissors) to start playing!</p>' +
         	"<p>Wins: " + wins + "</p>" +
         	"<p>Losses: " + losses + "</p>" +
         	"<p>Ties: " + ties + "</p>";

         	document.querySelector('#game').innerHTML = html;

        }
    */

// Other things I tried........

    /*  Trying to get lettersGuessed to populate on the page
        	lettersGuessed.push(playerGuess);
        	document.getElementById('#game').textContent += lettersGuessed.toString('<p>Letters you\'ve guessed: </p>');
			*/

	// Want it to not count letters already guessed

    // Needs a FOR loop, to determine how many times to allow guesses?????

 	