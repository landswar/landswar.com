import { actions } from 'react-redux-form';
import { post } from '../../helpers/fetch';

export const SET_TOKEN = 'SET_TOKEN';

export function setToken(token) {
	return (dispatch) => {
		localStorage.setItem('landswarToken', token);
		dispatch({
			type:    SET_TOKEN,
			isLogin: true,
		});
	};
}

export function createPlayer(nickname, history) {
	return (dispatch) => {
		dispatch(actions.submit('player', new Promise((resolve, reject) => {
			post('/players', { nickname })
			.then((response) => {
				if (response.statusCode === 400) {
					reject(response.message);
					return;
				}
				dispatch(setToken(response.token));
				history.push('/rooms');
				resolve(response);
			}).catch((error) => {
				reject(error);
			});
		})));
	};
}
