/**
 * @return {String} token (jwt)
 */
export function getToken() {
	return localStorage.getItem('landswar_token');
}

// (TMP) eslint veux un "export default"" si pas de fonction hello
export const hello = 'hello';
