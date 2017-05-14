import 'whatwg-fetch';
import { getToken } from './utils';

const API_URL = process.env.API_URL;


/**
 * GET request
 * @param {String} url url to get
 * @return {Promise} Promise to fetch data from $url
 */
export function get(url) {
	return new Promise((resolve, reject) => {
		fetch(`${API_URL}${url}`, {
			method:  'GET',
			headers: {
				Authorization:  `Bearer ${getToken()}`,
				Accept:         'application/json',
				'Content-Type': 'application/json',
			},
		})
		.then((response) => response.json())
		.then((responseJson) => {
			if (!responseJson || responseJson.error) {
				reject(responseJson);
				return;
			}
			resolve(responseJson);
		}).catch((error) => {
			logger.error(error);
			reject(error);
		});
	});
}

/**
 * POST request
 * @param {String} url url to get
 * @param {String} data Payload data
 * @return {Promise} Promise to fetch data from $url
 */
export function post(url, data) {
	return new Promise((resolve, reject) => {
		fetch(`${API_URL}${url}`, {
			method:  'POST',
			body:    JSON.stringify(data),
			headers: {
				Authorization:  `Bearer ${getToken()}`,
				Accept:         'application/json',
				'Content-Type': 'application/json',
			},
		})
		.then((response) => response.json())
		.then((responseJson) => {
			if (!responseJson || responseJson.error) {
				reject(responseJson);
				return;
			}
			resolve(responseJson);
		}).catch((error) => {
			logger.error(error);
			reject(error);
		});
	});
}

/**
 * PUT request
 * @param {String} url url to put
 * @param {String} data Payload data
 * @return {Promise} Promise to fetch data from $url
 */
export function put(url, data) {
	return new Promise((resolve, reject) => {
		fetch(`${API_URL}${url}`, {
			method:  'PUT',
			body:    JSON.stringify(data),
			headers: {
				Authorization:  `Bearer ${getToken()}`,
				Accept:         'application/json',
				'Content-Type': 'application/json',
			},
		})
		.then((response) => response.json())
		.then((responseJson) => {
			if (!responseJson || responseJson.error) {
				reject(responseJson);
				return;
			}
			resolve(responseJson);
		}).catch((error) => {
			logger.error(error);
			reject(error);
		});
	});
}

/**
 * DELETE request
 * @param {String} url url to put
 * @return {Promise} Promise to fetch data from $url
 */
export function delet(url) {
	return new Promise((resolve, reject) => {
		fetch(`${API_URL}${url}`, {
			method:  'DELETE',
			headers: {
				Authorization:  `Bearer ${getToken()}`,
				Accept:         'application/json',
				'Content-Type': 'application/json',
			},
		})
		.then((response) => response.json())
		.then((responseJson) => {
			if (!responseJson || responseJson.error) {
				reject(responseJson);
				return;
			}
			resolve(responseJson);
		}).catch((error) => {
			logger.error(error);
			reject(error);
		});
	});
}
