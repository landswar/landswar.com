import { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { logout } from '../../redux/auth/authActions';

/**
 * Logout component
 */
class Logout extends Component {
	/**
 	* Logout and redirect to login
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
