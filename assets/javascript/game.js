// Valid letter choices in array
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for everything else
var wins = 0;
var losses = 0;
// var chances = 9;
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

  // not working..............
  //  console.log(lettersGuessed.push(playerGuess));

if (chancesLeft > 0) {
  if (playerGuess === computerChoice) {
  	console.log('You survived');
  } else {
  	console.log('Nope');
  }
} else {
	console.log('You\'re dead.');
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

    // Put here? the limits on what's a letter vs not?
    /*
    if (playerGuess === [choices.indexOf]) {  //This isn't working...
    	console.log(playerGuess);
    } else {
    	alert('Hey dummy, choose a letter!');
    }
    */

    // Needs a FOR loop, to determine how many times to allow guesses?????

 	