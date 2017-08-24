import { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addFriend, deleteFriend } from '../../redux/player/playerActions';
import { setNotif } from '../../redux/behavior/behaviorActions';

import './AddFriend.scss';

/**
 * AddFriend component (Button to add a friend)
 * Add friend /friends/:id
 */
class AddFriend extends Component {
	/**
	 * constructor
	 * @param {Object} props property of the component
	 */
	constructor(props) {
		super(props);
		this.modeLabel = {
			accept: 'Accept friend request',
			add:    'Send friend request',
		};
	}

	/**
	 * Handler click on add friend button
	 */
	onAdd() {
		this.props.addFriend(this.props.friend);
	}

	/**
	 * Handler click on refuse friend button
	 */
	onRefuse() {
		this.props.deleteFriend(this.props.friend);
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
			<div className={this.props.className}>
				{this.props.mode !== 'refuse' ?
					(<Button onClick={this.onAdd.bind(this)}>
						{this.modeLabel[this.props.mode]}
					</Button>) : undefined
				}
				{this.props.mode === 'accept' || this.props.mode === 'refuse' ?
					(<Button onClick={this.onRefuse.bind(this)}>
						{this.props.mode === 'accept' ? 'Refuse request' : 'Delete friend'}
					</Button>) : undefined
				}
			</div>
		);
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
	addFriend:    (player) => dispatch(addFriend(player)),
	deleteFriend: (friend) => dispatch(deleteFriend(friend)),
	setNotif:     (error) => dispatch(setNotif(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend);
