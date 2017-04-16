import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../../containers/Header/Header.jsx';

import './App.scss';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<div className="container-fluid content text-center">
						<h3>LandsWar</h3>
						<p>
							Coming soon...<br/><br/>
							<a href="https://github.com/landswar/landswar.com">More informations on GitHub</a>
						</p>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
