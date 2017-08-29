import { actions } from 'react-redux-form';

import { post, get, put, delet } from '../../helpers/fetch';
import { login } from '../auth/authActions';
import { setNotif } from '../behavior/behaviorActions';

export const SET_PLAYERS = 'SET_PLAYERS';
export const SET_PLAYER = 'SET_PLAYER';
export const SET_FRIENDS = 'SET_FRIENDS';
export const SET_FRIENDS_REQUEST = 'SET_FRIENDS_REQUEST';

/**
 * POST /players
 * @param {Object} player player to create
 * @return {Function} [dispatch] return Promise: Creating new player
 */
export function createPlayer(player) {
	return (dispatch) =>
	dispatch(actions.submit('user', new Promise((resolve, reject) => {
		post('/players', {
			email:    player.email,
			nickname: player.nickname,
			password: player.password,
		}).then((response) => {
			dispatch(setNotif({
				message: 'Player created',
				level:   'success',
			}));
			dispatch(login(player.nickname, player.password));
			dispatch(actions.reset('user', {}));
			resolve(response);
		}).catch((error) => {
			reject(error);
		});
	})));
}


/**
 * GET /players
 * @return {Function} [dispatch] return Promise: Get all player
 */
export function getPlayers() {
	return (dispatch) => new Promise((resolve, reject) => {
		get('/players').then((response) => {
			dispatch({ type: SET_PLAYERS, players: response });
			resolve(true);
		}).catch((error) => {
			reject(error);
		});
	});
}

/**
 * GET /player/:id
 * @param {String} id Id of the player to get
 * @return {Function} [dispatch] return Promise: Get a specific player
 */
export function getPlayer(id) {
	return (dispatch) => new Promise((resolve, reject) => {
		get(`/players/${id}`).then((response) => {
			dispatch({ type: SET_PLAYER, player: response });
			resolve(response);
		}).catch((error) => {
			reject(error);
		});
	});
}

/**
 * PUT /player/:id
 * @param {Object} player Player to update
 * @return {Function} [dispatch] return Promise: Get a specific player
 */
export function updatePlayer(player) {
	return (dispatch) => new Promise((resolve) => {
		put(`/players/${player.id}`, {
			email:    player.email,
			nickname: player.nickname,
		}).then((response) => {
			dispatch({ type: SET_PLAYER, player: response });
			dispatch(setNotif({
				message: 'Player updated',
				level:   'success',
			}));
			resolve(response);
		}).catch((error) => {
			dispatch(setNotif({
				message: error.message,
				level:   'error',
			}));
		});
	});
}

/**
 * GET /friends
 * @return {Function} [dispatch] return Promise: Get all friends
 */
export function getFriends() {
	return (dispatch) => new Promise((resolve, reject) => {
		get('/friends').then((response) => {
			dispatch({ type: SET_FRIENDS, friends: response });
			resolve(response);
		}).catch((error) => {
			reject(error);
		});
	});
}

/**
 * GET /friends
 * @return {Function} [dispatch] return Promise: Get all friends request
 */
export function getFriendRequest() {
	return (dispatch) => new Promise((resolve, reject) => {
		get('/friendsRequest').then((response) => {
			dispatch({ type: SET_FRIENDS_REQUEST, friendRequest: response });
			resolve(response);
		}).catch((error) => {
			reject(error);
		});
	});
}

/**
 * POST /friends
 * @param {Object} friend Player to add as friend
 * @return {Function} [dispatch] return Promise: Request a friend
 */
export function addFriend(friend) {
	return (dispatch) => new Promise((resolve) => {
		post('/friends', { friend_id: friend.id }).then((response) => {
			dispatch(setNotif({
				message: 'Friend request sent',
				level:   'success',
			}));
			dispatch(getFriends());
			dispatch(getFriendRequest());
			resolve(response);
		}).catch((error) => {
			dispatch(setNotif({
				message: error.message,
				level:   'error',
			}));
		});
	});
}

/**
 * DELETE /friends/:friend_id
 * @param {Object} friend Player to add as friend
 * @return {Function} [dispatch] return Promise: Request a friend
 */
export function deleteFriend(friend) {
	return (dispatch) => new Promise((resolve) => {
		delet(`/friends/${friend.id}`).then((response) => {
			dispatch(setNotif({
				message: 'Friend removed',
				level:   'success',
			}));
			dispatch(getFriends());
			dispatch(getFriendRequest());
			resolve(response);
		}).catch((error) => {
			dispatch(setNotif({
				message: error.message,
				level:   'error',
			}));
		});
	});
}
