import { SET_TOKEN } from './playerActions';

const initialPlayer = {
	id:       '',
	nickname: '',
	token:    '',
};

export const formPlayer = initialPlayer;

const initialState = {
	isLogin: false,
};

export function loginReducers(state = initialState.isLogin, action) {
	switch (action.type) {
	case SET_TOKEN:
		return action.isLogin;
	default:
		return state;
	}
}
