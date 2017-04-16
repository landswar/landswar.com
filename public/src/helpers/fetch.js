import 'whatwg-fetch';

const API_URL = process.env.API_URL;

export function get(url) {
	return new Promise((resolve, reject) => {
		fetch(`${API_URL}${url}`, {
			method:  'GET',
			headers: {
				Accept:         'application/json',
				'Content-Type': 'application/json',
			},
		})
		.then((response) => response.json())
		.then((responseJson) => {
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
				Accept:         'application/json',
				'Content-Type': 'application/json',
			},
		})
		.then((response) => response.json())
		.then((responseJson) => {
			resolve(responseJson);
		}).catch((error) => {
			logger.error(error);
			reject(error);
		});
	});
}
