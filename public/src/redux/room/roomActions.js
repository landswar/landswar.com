import { get, post } from '../../helpers/fetch';
import { actions } from 'react-redux-form';

export const SET_ROOMS = 'SET_ROOMS';
export const SET_ROOM = 'SET_ROOM';

export function getRooms() {
	return (dispatch) => new Promise((resolve, reject) => {
		get('/rooms').then((rooms) => {
			dispatch({ type: SET_ROOMS, rooms });
			resolve(rooms);
		}).catch((error) => {
			reject(error);
		});
	});
}

export function getRoom(id) {
	return (dispatch) => new Promise((resolve, reject) => {
		get(`/rooms/${id}`).then((room) => {
			dispatch({ type: SET_ROOM, room });
			resolve(room);
		}).catch((error) => {
			reject(error);
		});
	});
}

export function createRoom(room) {
	return (dispatch) => {
		dispatch(actions.submit('room', new Promise((resolve, reject) => {
			post('/rooms', { name: room.name }).then((response) => {
				if (response.statusCode === 400) {
					reject(response.message);
					return;
				}

				dispatch(getRooms());
				resolve(response);
			}).catch((error) => {
				reject(error);
			});
		})));
	};
}
