export const SET_GAME_STARTED = 'SET_GAME_STARTED';

/**
 * @return {Function} [dispatch] return Promise: Start the game
 */
export function startGame() {
	return (dispatch) => dispatch({ type: SET_GAME_STARTED, gameStarted: true });
}

/**
 * @return {Function} [dispatch] return Promise: Start the game
 */
export function stopGame() {
	return (dispatch) => dispatch({ type: SET_GAME_STARTED, gameStarted: false });
}
