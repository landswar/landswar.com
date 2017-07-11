import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRoom } from '../../redux/room/roomActions';

import Game from '../../components/Game/Game.jsx';
import FormRoom from '../../components/Forms/FormRoom/FormRoom.jsx';

/**
 * Room component
 */
class Room extends Component {
	/**
 	* Hook called before component mounted
	* Fetch room
 	*/
	componentWillMount() {
		this.props.getRoom(this.props.match.params.id);
	}

	/**
 	* render for owner of the room
	* @returns {JSX} return jsx
 	*/
	renderOwner() {
		return (
			<div>
				<FormRoom update/>
				<Game/>
			</div>
		);
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		if (this.props.room.owner === this.props.player.id) {
			return this.renderOwner();
		}
		return (
			<div>
				<Game/>
			</div>
		);
	}
}

Room.propTypes = {
	room: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
	room:   state.room,
	player: state.player,
});

const mapDispatchToProps = (dispatch) => ({
	getRoom: (id) => dispatch(getRoom(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
