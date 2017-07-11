import { SET_LOGIN } from './authActions';

const initialState = {
	isLogin: false,
};

export const loginModel = {
	nickname: '',
	password: '',
};

/**
 * Authentification reducer (property: isLogin)
 * @param {Object} state State of isLogin
 * @param {Object} action Action to reduce
 * @return {Boolean} new state of isLogin
 */
export function authReducers(state = initialState.isLogin, action) {
	switch (action.type) {
	case SET_LOGIN:
		return action.isLogin;
	default:
		return state;
	}
}
