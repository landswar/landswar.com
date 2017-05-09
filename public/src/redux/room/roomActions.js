import { actions } from 'react-redux-form';
import { push } from 'react-router-redux';

import { get, post } from '../../helpers/fetch';

export const SET_ROOMS = 'SET_ROOMS';
export const SET_ROOM = 'SET_ROOM';

/**
 * GET /rooms
 * @return {Function} get all room
 * TODO refactor with async await !!!
 */
export function getRooms() {
	return (dispatch) => new Promise((resolve, reject) => {
		get('/rooms').then((response) => {
			if (!response.error) {
				dispatch({ type: SET_ROOMS, rooms: response });
				resolve(response);
			} else {
				reject(new Error(response.error));
			}
		}).catch((error) => {
			reject(error);
		});
	});
}

/**
 * GET /room
 * @param {String} id shortid of the room to get
 * @return {Function} get a specific room
 * TODO refactor with async await !!!
 */
export function getRoom(id) {
	return (dispatch) => new Promise((resolve, reject) => {
		get(`/rooms/${id}`).then((response) => {
			if (!response.error) {
				dispatch({ type: SET_ROOM, room: response });
				resolve(response);
			} else {
				reject(new Error(response.error));
			}
		}).catch((error) => {
			reject(error);
		});
	});
}

export function createRoom(room) {
	return (dispatch) => {
		dispatch(actions.submit('newRoom', new Promise((resolve, reject) => {
			post('/rooms', { name: room.name }).then((response) => {
				if (!response.error) {
					dispatch(push(`/room/${response.shortid}`))
					//dispatch(getRooms());
					resolve(response);
				} else {
					reject(new Error(response.error));
				}
			}).catch((error) => {
				reject(error);
			});
		})));
	};
}
