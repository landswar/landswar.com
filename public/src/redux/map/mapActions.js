import { get } from '../../helpers/fetch';

export const SET_MAPS = 'SET_MAPS';
export const SET_MAP = 'SET_MAP';

/**
 * GET /maps
 * @return {Function} [dispatch] return Promise: Get all map
 */
export function getMaps() {
	return (dispatch) => new Promise((resolve, reject) => {
		get('/maps').then((response) => {
			dispatch({ type: SET_MAPS, maps: response });
			resolve(true);
		}).catch((error) => {
			reject(error);
		});
	});
}

/**
 * GET /maps/:id
 * @param {String} id Id of the map to get
 * @return {Function} [dispatch] return Promise: Get a specific map
 */
export function getMap(id) {
	return (dispatch) => new Promise((resolve, reject) => {
		get(`/maps/${id}`).then((response) => {
			dispatch({ type: SET_MAP, map: response });
			resolve(response);
		}).catch((error) => {
			reject(error);
		});
	});
}

