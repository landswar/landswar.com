import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

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

import './App.scss';

/**
 * App component
 */
class App extends Component {
	/**
 	* Hook called when state change
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
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		const HomeComponent = this.props.isLogin ? Home : Login;
		return (
			<div className="app">
				<Header/>
				<div className="container-fluid content">
					<Route exact path="/" component={HomeComponent}/>
					<PrivateRoute isLogin={this.props.isLogin} exact path="/rooms" component={Rooms}/>
					<PrivateRoute isLogin={this.props.isLogin} exact path="/room/:id" component={Room}/>
					<PrivateRoute isLogin={this.props.isLogin} exact path="/players" component={Players}/>
					<PrivateRoute isLogin={this.props.isLogin} exact path="/player/:id" component={Player}/>
					<PrivateRoute isLogin={this.props.isLogin} exact path="/logout" component={Logout}/>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	isLogin: React.PropTypes.bool,
};

const mapStateToProps = (state) => ({ isLogin: state.isLogin });
const mapDispatchToProps = (dispatch) => ({
	redirect: (location) => dispatch(push(location)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
