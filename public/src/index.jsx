import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';

import './config';

import { loginReducers, formPlayer } from './redux/player/playerReducers';
import { roomsReducers, currentRoomReducers, formRoom } from './redux/room/roomReducers';

import App from './containers/App/App.jsx';

const reducers = combineReducers({
	...createForms({ player: formPlayer, room: formRoom }),
	isLogin:     loginReducers,
	rooms:       roomsReducers,
	currentRoom: currentRoomReducers,
});

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
