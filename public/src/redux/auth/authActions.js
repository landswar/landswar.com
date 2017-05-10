import { actions } from 'react-redux-form';
import { push } from 'react-router-redux';

import { post } from '../../helpers/fetch';

export const SET_LOGIN = 'SET_LOGIN';

/**
 * Set isLogin to true and store token in localstorage
 * @param {String} token token to set
 * @returns {Function} dispatch function
 */
export function setLogin(token) {
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
export function setLogout() {
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
 * request login if true redirect to rooms
 * @param {String} id nickname or email
 * @param {String} password password
 * @returns {Function} login request
 */
export function login(id, password) {
	return (dispatch) => {
		dispatch(actions.submit('user', new Promise((resolve, reject) => {
			post('/login', {
				id,
				password,
			}).then((json) => {
				dispatch(push('/rooms'));
				dispatch(setLogin(json.token));
				dispatch(actions.change('user', json));
				resolve(json);
			}).catch((error) => {
				reject(error);
			});
		})));
	};
}

/**
 * POST /checkToken
 * request checkToken if true redirect to rooms
 * @param {String} token Token to check
 * @returns {Function} login request
 */
export function loginByToken(token) {
	return (dispatch) => {
		post('/checkToken', {
			token,
		}).then((json) => {
			dispatch(push('/rooms'));
			dispatch(setLogin(token));
			dispatch(actions.change('user', json));
		}).catch((error) => {
			dispatch(setLogout());
			logger.error(error);
		});
	};
}
