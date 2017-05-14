import { actions } from 'react-redux-form';

import { post, get, put } from '../../helpers/fetch';
import { login } from '../auth/authActions';

export const SET_PLAYERS = 'SET_PLAYERS';
export const SET_PLAYER = 'SET_PLAYER';

/**
 * POST /players
 * @param {Object} player player to create
 * @return {Function} [dispatch] return Promise: Creating new player
 */
export function createPlayer(player) {
	return (dispatch) =>
		dispatch(actions.submit('formPlayer', new Promise((resolve, reject) => {
			post('/players', {
				email:    player.email,
				nickname: player.nickname,
				password: player.password,
			}).then((response) => {
				dispatch(actions.reset('formPlayer'));
				dispatch(login(player.nickname, player.password));
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
 * GET /room
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
 * GET /room
 * @param {String} id Id of the player to get
 * @return {Function} [dispatch] return Promise: Get a specific player
 */
export function updatePlayer(player) {
	return (dispatch) => new Promise((resolve, reject) => {
		put(`/players/${player.id}`, {
			email:    player.email,
			nickname: player.nickname,
		}).then((response) => {
			dispatch({ type: SET_PLAYER, player: response });
			resolve(response);
		}).catch((error) => {
			reject(error);
		});
	});
}
