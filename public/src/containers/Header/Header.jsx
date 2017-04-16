import { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
	render() {
		return (
			<nav className="header bg-primary navbar navbar-default">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">Home</Link>
					<Link className="navbar-brand" to="/rooms">Rooms</Link>
				</div>
			</nav>
		);
	}
}

export default Header;
