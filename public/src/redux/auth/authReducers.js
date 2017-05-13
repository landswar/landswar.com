import { SET_LOGIN } from './authActions';

const initialState = {
	isLogin: false,
};

export function authReducers(state = initialState.isLogin, action) {
	switch (action.type) {
	case SET_LOGIN:
		return action.isLogin;
	default:
		return state;
	}
}

export const userModel = {
	nickname: '',
	password: '',
};
