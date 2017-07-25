import { SET_NOTIF } from './behaviorActions';

export const initialState = {
	notif: {},
};

/**
 * Set error to display (property: error)
 * @param {Object} state State of error
 * @param {Object} action Action to reduce
 * @return {Boolean} new state of isLogin
 */
export function notifReducers(state = initialState.notif, action) {
	switch (action.type) {
	case SET_NOTIF:
		return action.notif;
	default:
		return state;
	}
}
