import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRoom } from '../../redux/room/roomActions';

import Game from '../../components/Game/Game.jsx';

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
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
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
	room: state.room,
});

const mapDispatchToProps = (dispatch) => ({
	getRoom: (id) => dispatch(getRoom(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
