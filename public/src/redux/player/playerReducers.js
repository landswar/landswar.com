import { SET_PLAYERS, SET_PLAYER } from './playerActions';

export const playerModel = {
	email:           '',
	nickname:        '',
	password:        '',
	passwordConfirm: '',
};

const initialState = {
	players: [],
	player:  {},
};

/**
 * Players reducer (property: players)
 * @param {Object} state State of players
 * @param {Object} action Action to reduce
 * @return {Array} new state of players
 */
export function playersReducers(state = initialState.players, action) {
	switch (action.type) {
	case SET_PLAYERS:
		return action.players;
	default:
		return state;
	}
}

/**
 * Player reducer (property: player)
 * @param {Object} state State of player
 * @param {Object} action Action to reduce
 * @return {Array} new state of player
 */
export function playerReducers(state = initialState.player, action) {
	switch (action.type) {
	case SET_PLAYER:
		return action.player;
	default:
		return state;
	}
}
