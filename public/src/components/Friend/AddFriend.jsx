import { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addFriend } from '../../redux/player/playerActions';
import { setNotif } from '../../redux/behavior/behaviorActions';

import './AddFriend.scss';

/**
 * AddFriend component (Button to add a friend)
 * Add friend /friends/:id
 */
class AddFriend extends Component {

	/**
	 * Handler click on add friend button
	 */
	onAdd() {
		this.props.addFriend(this.props.friend).catch((error) => {
			this.props.setNotif({
				message: error.message,
				level:   'error',
			});
		});
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
			<Button onClick={this.onAdd.bind(this)} className={this.props.className}>Add friend</Button>
		);
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
	addFriend: (id) => dispatch(addFriend(id)),
	setNotif:  (error) => dispatch(setNotif(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend);
