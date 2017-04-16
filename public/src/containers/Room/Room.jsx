import { Component } from 'react';
import { connect } from 'react-redux';
import { getRoom } from '../../redux/room/roomActions';

class Room extends Component {
	componentWillMount() {
		this.props.getRoom(this.props.match.params.id);
	}

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

const mapStateToProps = (state, ownProps) => ({
	room: state.currentRoom,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getRoom: (id) => dispatch(getRoom(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
