import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';

import './config';

import { authReducers, userModel } from './redux/auth/authReducers';
import { playersReducers, playerReducers, formNewPlayer } from './redux/player/playerReducers';
import { roomsReducers, roomReducers, formNewRoom } from './redux/room/roomReducers';

import App from './containers/App/App.jsx';

const reducers = combineReducers({
	...createForms({ user: userModel, newRoom: formNewRoom, newPlayer: formNewPlayer }),
	isLogin: authReducers,
	rooms:   roomsReducers,
	room: 			roomReducers,
	router:  routerReducer,
	players:	playersReducers,
	player:		playerReducers,
});

const history = createHistory();
const middlewares = applyMiddleware(thunk, routerMiddleware(history));
const store = createStore(reducers, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
		<App/>
    </ConnectedRouter>
</Provider>, document.getElementById('root'));
