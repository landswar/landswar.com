import { SET_ROOMS, SET_ROOM } from './roomActions';

export const roomModel = {
	name:      '',
	maxPlayer: 2,
};

const initialState = {
	rooms: [],
	room:  {},
};

/**
 * Rooms reducer (property: rooms)
 * @param {Object} state State of rooms
 * @param {Object} action Action to reduce
 * @return {Array} new state of room
 */
export function roomsReducers(state = initialState.rooms, action) {
	switch (action.type) {
	case SET_ROOMS:
		return action.rooms;
	default:
		return state;
	}
}

/**
 * Room reducer (property: room)
 * @param {Object} state State of room
 * @param {Object} action Action to reduce
 * @return {Array} new state of room
 */
export function roomReducers(state = initialState.room, action) {
	switch (action.type) {
	case SET_ROOM:
		return action.room;
	default:
		return state;
	}
}
