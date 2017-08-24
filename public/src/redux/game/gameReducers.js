import { SET_GAME_STARTED } from './gameActions';

const initialState = {
	gameStarted: false,
};

/**
 * Maps reducer (property: gameStarted)
 * @param {Object} state State of maps
 * @param {Object} action Action to reduce
 * @return {Array} new state of maps
 */
export function gameStartedReducers(state = initialState.gameStarted, action) {
	switch (action.type) {
	case SET_GAME_STARTED:
		return action.gameStarted;
	default:
		return state;
	}
}
