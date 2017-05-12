import { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { push } from 'react-router-redux';

/**
 * ItemRoom render in Rooms.jsx
 */
class ItemRoom extends Component {
	/**
 	* Redirect to room
 	*/
	joinRoom() {
		this.props.redirect(`/room/${this.props.room.shortid}`);
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
			<tr>
				<td>{this.props.room.id}</td>
				<td>{this.props.room.name}</td>
				<td>x/{this.props.room.maxPlayer}</td>
				<td className="join-button">
					<Button className="btn-primary" onClick={this.joinRoom.bind(this)}>Join</Button>
				</td>
			</tr>
		);
	}
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
	redirect: (location) => dispatch(push(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemRoom);
