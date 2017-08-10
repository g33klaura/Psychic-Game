# Psychic-Game
JavaScript game to try and beat the computer, and test out psychic abilities.

/* Steps needed for the game part
 * Need variables for letters to choose from (aka choices), computerGuess, playerGuess, Wins, Losses, chancesLeft, lettersGuessed, computerReveal
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