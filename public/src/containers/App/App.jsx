import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import NotificationSystem from 'react-notification-system';

// Components
import PrivateRoute from '../../components/Generic/PrivateRoute/PrivateRoute.jsx';
import Logout from '../../components/Logout/Logout.jsx';

// Containers
import Header from '../Header/Header.jsx';
import Rooms from '../Rooms/Rooms.jsx';
import Room from '../Room/Room.jsx';
import Login from '../Login/Login.jsx';
import Home from '../Home/Home.jsx';
import Players from '../Players/Players.jsx';
import Player from '../Player/Player.jsx';

// redux
import { setNotif } from '../../redux/behavior/behaviorActions';

import './App.scss';

/**
 * App component
 */
class App extends Component {

	/**
 	* Hook called before states change
	* @param {Object} nextProps New properties state
 	*/
	componentWillUpdate(nextProps) {
		// If isLogin change
		if (this.props.isLogin !== nextProps.isLogin) {
			if (nextProps.isLogin) {
				this.props.redirect('/rooms');
			} else {
				this.props.redirect('/');
			}
		}
	}

	/**
 	* Hook called after states change
 	*/
	componentDidUpdate() {
		if (this.props.notif && this.props.notif.message) {
			this.refs.notif.addNotification({
				message: this.props.notif.message,
				level:   this.props.notif.level,
			});
			this.props.setNotif({});
		}
	}

	/**
 	* render when login
	* @returns {JSX} return jsx
 	*/
	renderLogIn() {
		return (
			<div className="app">
				<NotificationSystem ref="notif"/>
				<Header/>
				<div className="container-fluid content">
					<Route exact path="/" component={Home}/>
					<PrivateRoute isLogin={this.props.isLogin} exact path="/rooms" component={Rooms}/>
					<PrivateRoute isLogin={this.props.isLogin} exact path="/room/:id" component={Room}/>
					<PrivateRoute isLogin={this.props.isLogin} exact path="/players" component={Players}/>
					<PrivateRoute isLogin={this.props.isLogin} exact path="/player/:id" component={Player}/>
					<PrivateRoute isLogin={this.props.isLogin} exact path="/logout" component={Logout}/>
				</div>
			</div>
		);
	}

	/**
 	* render when logout
	* @returns {JSX} return jsx
 	*/
	renderLogout() {
		return (
			<div className="app">
				<NotificationSystem ref="notif"/>
				<Header/>
				<div className="container-fluid content">
					<Route exact path="/" component={Login}/>
				</div>
			</div>

		);
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return this.props.isLogin ? this.renderLogIn() : this.renderLogout();
	}
}

App.propTypes = {
	isLogin: React.PropTypes.bool,
	notif:   React.PropTypes.object,
};

const mapStateToProps = (state) => ({
	isLogin: state.isLogin,
	notif:   state.notif,
});
const mapDispatchToProps = (dispatch) => ({
	redirect: (location) => dispatch(push(location)),
	setNotif: (error) => dispatch(setNotif(error)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
