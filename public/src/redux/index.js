import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';

import { authReducers, userModel } from './auth/authReducers';
import { playersReducers, playerReducers, formNewPlayer } from './player/playerReducers';
import { roomsReducers, roomReducers, formNewRoom } from './room/roomReducers';

const reducers = combineReducers({
	...createForms({ user: userModel, newRoom: formNewRoom, newPlayer: formNewPlayer }),
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
