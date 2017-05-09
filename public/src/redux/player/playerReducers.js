import { SET_PLAYERS, SET_PLAYER } from './playerActions';

export const formNewPlayer = {
	email:           '',
	nickname:        '',
	password:        '',
	passwordConfirm: '',
};

const initialState = {
	players: [],
	player:  {},
};

export function playersReducers(state = initialState.players, action) {
	switch (action.type) {
	case SET_PLAYERS:
		return action.players;
	default:
		return state;
	}
}

export function playerReducers(state = initialState.player, action) {
	switch (action.type) {
	case SET_PLAYER:
		return action.player;
	default:
		return state;
	}
}
