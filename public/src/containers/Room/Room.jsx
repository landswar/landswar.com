import { Component } from 'react';
import { connect } from 'react-redux';
import { getRoom } from '../../redux/room/roomActions';

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
				<p>
					Coming soon...
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	room: state.room,
});

const mapDispatchToProps = (dispatch) => ({
	getRoom: (id) => dispatch(getRoom(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
