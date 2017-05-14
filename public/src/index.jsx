import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { push, ConnectedRouter } from 'react-router-redux';

// Redux App
import { store, history } from './redux/index';

// Actions
import { loginByToken } from './redux/auth/authActions';

// Containers
import App from './containers/App/App.jsx';

import './config';

/**
 * Main class
 */
class Main {
	/**
	 * Main constructor
	 */
	constructor() {
		// Expose Method app.getToken()
		this.getToken = () => localStorage.getItem('landswar_token');
		this.token = this.getToken();
	}

	/**
	 * Start the app
	 * Try to login with token. If success redirect to /rooms
	 */
	start() {
		if (!this.token) {
			this.render();
			return;
		}
		// TODO try with await !
		store.dispatch(loginByToken(this.token)).then(() => {
			if (store.getState().isLogin) {
				store.dispatch(push('/rooms'));
			}
			this.render();
		});
	}

	/**
	 * render the app
	 */
	render() {
		ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App/>
			</ConnectedRouter>
		</Provider>, document.getElementById('root'));
	}

}

// API
const main = new Main();
main.start();
