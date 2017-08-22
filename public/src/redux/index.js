import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';

import { authReducers, loginModel } from './auth/authReducers';
import { playersReducers, playerReducers, userModel, friendsReducers, friendRequestReducers } from './player/playerReducers';
import { mapsReducers, mapReducers } from './map/mapReducers';
import { roomsReducers, roomReducers, roomModel } from './room/roomReducers';
import { notifReducers } from './behavior/behaviorReducers';
import { gameStartedReducers } from './game/gameReducers';

const reducers = combineReducers({
	...createForms({ loginForm: loginModel, roomForm: roomModel, user: userModel }),
	isLogin:       authReducers,
	rooms:         roomsReducers,
	room: 			      roomReducers,
	router:        routerReducer,
	players:	      playersReducers,
	player:		      playerReducers,
	maps:	         mapsReducers,
	map:		         mapReducers,
	notif:         notifReducers,
	friends:       friendsReducers,
	friendRequest: friendRequestReducers,
	gameStarted:   gameStartedReducers,
});

export const history = createHistory();
const middlewares = applyMiddleware(thunk, routerMiddleware(history));

export const store = createStore(reducers, middlewares);
