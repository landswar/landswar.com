import { actions } from 'react-redux-form';
import { push } from 'react-router-redux';

import { get, post } from '../../helpers/fetch';

export const SET_ROOMS = 'SET_ROOMS';
export const SET_ROOM = 'SET_ROOM';

/**
 * GET /rooms
 * @return {Function} [dispatch] return Promise: Get all rooms
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
 * @return {Function} [dispatch] return Promise: Get specific room
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

/**
 * POST /room
 * @param {String} room Room to create
 * @return {Function} [dispatch] return Promise: Creating new room
 */
export function createRoom(room) {
	return (dispatch) => {
		dispatch(actions.submit('roomForm', new Promise((resolve, reject) => {
			post('/rooms', { name: room.name }).then((response) => {
				if (!response.error) {
					dispatch({ type: SET_ROOM, room: response });
					dispatch(push(`/room/${response.shortid}`));
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
