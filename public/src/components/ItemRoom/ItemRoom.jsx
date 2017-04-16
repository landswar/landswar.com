import { Component } from 'react';
import { Button } from 'react-bootstrap';

class ItemRoom extends Component {
	joinRoom() {
		this.props.history.push(`/room/${this.props.room.shortid}`);
	}

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

export default ItemRoom;
