import { actions } from 'react-redux-form';

import { post } from '../../helpers/fetch';

export const SET_LOGIN = 'SET_LOGIN';

/**
 * Set isLogin to true and store token in localstorage
 * @param {String} token token to set
 * @returns {Function} dispatch function
 */
function setLogin(token) {
	return (dispatch) => {
		localStorage.setItem('landswar_token', token);
		dispatch({
			type:    SET_LOGIN,
			isLogin: true,
		});
	};
}

/**
 * Set isLogin to false and remove the token from localstorage
 * @returns {Function} dispatch function
 */
function setLogout() {
	return (dispatch) => {
		localStorage.removeItem('landswar_token');
		dispatch({
			type:    SET_LOGIN,
			isLogin: false,
		});
	};
}

/**
 * POST /login
 * request login
 * @param {String} id nickname or email
 * @param {String} password password
 * @returns {Function} login request
 */
export function login(id, password) {
	return (dispatch) =>
		dispatch(actions.submit('user', new Promise((resolve, reject) => {
			post('/login', {
				id,
				password,
			}).then((json) => {
				dispatch(setLogin(json.token));
				dispatch(actions.change('user', json));
				resolve(json);
			}).catch((error) => {
				reject(error.message);
			});
		})));
}

/**
 * POST /checkToken
 * request checkToken
 * @param {String} token Token to check
 * @returns {Function} login request
 */
export function loginByToken(token) {
	return (dispatch) =>
		post('/checkToken', {
			token,
		}).then((json) => {
			dispatch(setLogin(token));
			dispatch(actions.change('user', json));
		}).catch((error) => {
			dispatch(setLogout());
			logger.error(error);
		});
}

/**
 * POST /logout
 * request logout
 * @returns {Function} logout request
 */
export function logout() {
	return (dispatch) => {
		dispatch(actions.reset('user'));
		dispatch(setLogout());
	};
}
