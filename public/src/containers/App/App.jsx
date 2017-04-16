import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../../containers/Header/Header.jsx';
import Rooms from '../../containers/Rooms/Rooms.jsx';
import Room from '../../containers/Room/Room.jsx';
import FormPlayer from '../../components/FormPlayer/FormPlayer.jsx';

import './App.scss';

class App extends Component {
	componentWillMount() {
		const token = localStorage.getItem('landswar_token');
		if (token) {
			// Check token validity, and redirect
			logger.debug('TOKEN', token);
		}
	}

	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<Header/>
					<div className="container-fluid content">
						<Route exact path="/" component={FormPlayer}/>
						<Route path="/rooms" component={Rooms}/>
						<Route path="/room/:id" component={Room}/>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
