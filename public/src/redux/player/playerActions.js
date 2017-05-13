import { actions } from 'react-redux-form';

import { post, get } from '../../helpers/fetch';
import { login } from '../auth/authActions';

export const SET_PLAYERS = 'SET_PLAYERS';
export const SET_PLAYER = 'SET_PLAYER';

/**
 * POST /players
 * @param {Object} player player to create
 * @return {Function} dispatch function
 */
export function createPlayer(player) {
	return (dispatch) => {
		dispatch(actions.submit('newPlayer', new Promise((resolve, reject) => {
			post('/players', {
				email:    player.email,
				nickname: player.nickname,
				password: player.password,
			}).then((response) => {
				dispatch(actions.reset('newPlayer'));
				dispatch(login(player.nickname, player.password));
				resolve(response);
			}).catch((error) => {
				reject(error);
			});
		})));
	};
}


/**
 * GET /players
 * @return {Function} get all player
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
 * @return {Function} Get a specific player
 * TODO refactor with async await !!!
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

/*
//TODO create route /players/isNicknameAvailable
export const isNicknameAvailable = async(nickname, done) => {
  const json = await post('/players', { nickname: nickname });
  if (json && json.statusCode === 200)
    done(true);
  done(false);
};
*/
