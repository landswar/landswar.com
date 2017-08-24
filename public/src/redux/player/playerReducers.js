import { SET_PLAYERS, SET_PLAYER, SET_FRIENDS, SET_FRIENDS_REQUEST } from './playerActions';

export const userModel = {
	email:           '',
	nickname:        '',
	password:        '',
	passwordConfirm: '',
};

const initialState = {
	players: [],
	player:  {},
	friends: [],
	friendRequest: [],
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

/**
 * Friends reducer (property: friends)
 * @param {Object} state State of friends
 * @param {Object} action Action to reduce
 * @return {Array} new state of friends
 */
export function friendsReducers(state = initialState.friends, action) {
	switch (action.type) {
	case SET_FRIENDS:
		return action.friends;
	default:
		return state;
	}
}

/**
 * Friends reducer (property: friends)
 * @param {Object} state State of friends
 * @param {Object} action Action to reduce
 * @return {Array} new state of friends
 */
export function friendRequestReducers(state = initialState.friendRequest, action) {
	switch (action.type) {
	case SET_FRIENDS_REQUEST:
		return action.friendRequest;
	default:
		return state;
	}
}
