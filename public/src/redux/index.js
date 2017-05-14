import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';

import { authReducers, loginModel } from './auth/authReducers';
import { playersReducers, playerReducers, playerModel } from './player/playerReducers';
import { roomsReducers, roomReducers, formNewRoom } from './room/roomReducers';

const reducers = combineReducers({
	...createForms({ loginForm: loginModel, newRoom: formNewRoom, playerForm: playerModel }),
	isLogin: authReducers,
	rooms:   roomsReducers,
	room: 			roomReducers,
	router:  routerReducer,
	players:	playersReducers,
	player:		playerReducers,
});

export const history = createHistory();
const middlewares = applyMiddleware(thunk, routerMiddleware(history));

export const store = createStore(reducers, middlewares);
