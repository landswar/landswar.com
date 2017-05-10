import { Component } from 'react';
import { Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import PrivateRoute from '../../components/Generic/PrivateRoute/PrivateRoute.jsx';
//import UnlogRoute from '../../components/Generic/UnlogRoute/UnlogRoute.jsx';

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
 	* Hook called before component mounted
 	*/
	componentWillMount() {
		if (this.props.isLogin) {
			this.props.redirect('/rooms');
		}
	}

	/**
 	* Hook called when state change
	* @param {Object} old properties state before update
 	*/
	componentDidUpdate(old) {
		if (this.props.isLogin && this.props.isLogin !== old.isLogin) {
			this.props.redirect('/rooms');
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
					<Route exact path="/players" component={Players}/>
					<Route exact path="/player/:id" component={Player}/>
        </div>
      </div>
		);
	}
}

const mapStateToProps = (state) => ({ isLogin: state.isLogin });
const mapDispatchToProps = (dispatch) => ({
	redirect: (location) => dispatch(push(location)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
