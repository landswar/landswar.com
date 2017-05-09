import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.scss';

/**
 * Header component
 */
class Header extends Component {
	/**
 	* render Link when login
	* @returns {JSX} return jsx
 	*/
	renderLogIn() {
		return (
			<nav className="header bg-primary navbar navbar-default">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">Home</Link>
					<Link className="navbar-brand" to="/rooms">Rooms</Link>
					<Link className="navbar-brand" to="/players">Players</Link>
					<Link className="logout navbar-brand" to="/logout">Logout</Link>
				</div>
			</nav>
		);
	}

	/**
 	* render Link when logout
	* @returns {JSX} return jsx
 	*/
	renderLogOut() {
		return (
			<nav className="header bg-primary navbar navbar-default">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">LogIn</Link>
					<Link className="navbar-brand" to="/players">Players</Link>
				</div>
			</nav>
		);
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		if (this.props.isLogin) {
			return this.renderLogIn();
		}
		return this.renderLogOut();
	}
}

const mapStateToProps = (state) => ({ isLogin: state.isLogin });
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
