import { SET_MAP, SET_MAPS } from './mapActions';

const initialState = {
	maps: [],
	map:  {},
};

/**
 * Maps reducer (property: maps)
 * @param {Object} state State of maps
 * @param {Object} action Action to reduce
 * @return {Array} new state of maps
 */
export function mapsReducers(state = initialState.maps, action) {
	switch (action.type) {
	case SET_MAPS:
		return action.maps;
	default:
		return state;
	}
}

/**
 * Map reducer (property: map)
 * @param {Object} state State of map
 * @param {Object} action Action to reduce
 * @return {Array} new state of map
 */
export function mapReducers(state = initialState.map, action) {
	switch (action.type) {
	case SET_MAP:
		return action.map;
	default:
		return state;
	}
}
