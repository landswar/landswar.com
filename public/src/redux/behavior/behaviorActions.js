export const SET_NOTIF = 'SET_NOTIF';

/**
 * GET /maps
 * @return {Function} [dispatch] return Promise: Get all map
 * @param {Object} notif Notif { message: 'msg', level: 'info|error|success|warning' }
 */
export function setNotif(notif) {
	return (dispatch) => dispatch({ type: SET_NOTIF, notif });
}
