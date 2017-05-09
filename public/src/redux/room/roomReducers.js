import { SET_ROOMS, SET_ROOM } from './roomActions';

export const formNewRoom = {
	name:      '',
	maxPlayer: 2,
};

const initialState = {
	rooms: [],
	room: {},
};

export function roomsReducers(state = initialState.rooms, action) {
	switch (action.type) {
	case SET_ROOMS:
		return action.rooms;
	default:
		return state;
	}
}

export function roomReducers(state = initialState.room, action) {
	switch (action.type) {
	case SET_ROOM:
		return action.room;
	default:
		return state;
	}
}
