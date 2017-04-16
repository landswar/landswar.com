import { SET_ROOMS, SET_ROOM } from './roomActions';

const initialRoom = {
	name:      '',
	maxPlayer: 2,
};

export const formRoom = initialRoom;

const initialState = {
	rooms: [],
};

export function roomsReducers(state = initialState.rooms, action) {
	switch (action.type) {
	case SET_ROOMS:
		return action.rooms;
	default:
		return state;
	}
}

export function currentRoomReducers(state = initialRoom, action) {
	switch (action.type) {
	case SET_ROOM:
		return action.room;
	default:
		return state;
	}
}
