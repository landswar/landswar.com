import { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { logout } from '../../redux/auth/authActions';

/**
 * Logout render in Rooms.jsx
 */
class Logout extends Component {
	/**
 	* Redirect to room
 	*/
	componentWillMount() {
		this.props.logout();
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return null;
	}
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
