import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';

import NotificationList from '../../components/NotificationList/NotificationList.jsx';

import { getFriendRequest } from '../../redux/player/playerActions';

import './Header.scss';

/**
 * Header component
 */
class Header extends Component {
	/**
	 * Hook on before component mount (ask for friend request)
	 */
	componentWillMount() {
		this.props.getFriendRequest();
	}

	/**
	 * onNotifClicked hook
	 * @param {Object} notif notif clicked
	 */
	onNotifClicked(notif) {
		this.props.redirect(`/player/${notif.id}`);
	}

	/**
 	* render Link when login
	* @returns {JSX} return jsx
 	*/
	renderLogIn() {
		return (
			<nav className="header bg-primary navbar navbar-default">
				<div className="navbar-header">
					<NotificationList
						onNotifClicked={this.onNotifClicked.bind(this)}
						list={this.props.friendRequest}
						className="notif navbar-brand"/>
					<Link className="navbar-brand" to="/">Home</Link>
					<Link className="navbar-brand" to="/rooms">Rooms</Link>
					<Link className="navbar-brand" to="/players">Players</Link>
					<Link className="right navbar-brand" to="/logout">Logout</Link>
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
					<Link className="navbar-brand" to="/">Sign In</Link>
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

Header.propTypes = {
	isLogin: React.PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isLogin:       state.isLogin,
	friendRequest: state.friendRequest,
});
const mapDispatchToProps = (dispatch) => ({
	getFriendRequest: () => dispatch(getFriendRequest()),
	redirect:         (location) => dispatch(push(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
