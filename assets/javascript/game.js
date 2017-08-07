/* Steps needed for the game part
* Need variables for computerChoice, playerGuess, Wins, Losses, guessedLetters, computerReveal
* Computer chooses a letter
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
*/

let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
