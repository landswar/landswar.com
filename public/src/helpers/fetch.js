import 'whatwg-fetch';

const API_URL = process.env.API_URL;

const getToken = () => localStorage.getItem('landswar_token');

export function get(url) {
	return new Promise((resolve, reject) => {
		fetch(`${API_URL}${url}`, {
			method:  'GET',
			headers: {
				Authorization: `Bearer ${getToken()}`,
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

export function post(url, data) {
	return new Promise((resolve, reject) => {
		fetch(`${API_URL}${url}`, {
			method:  'POST',
			body:    JSON.stringify(data),
			headers: {
				Authorization: `Bearer ${getToken()}`,
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
