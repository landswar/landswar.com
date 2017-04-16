import { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'react-bootstrap';

import { getRooms } from '../../redux/room/roomActions';

import Modal from '../../components/Modal/Modal.jsx';
import FormRoom from '../../components/FormRoom/FormRoom.jsx';
import ItemRoom from '../../components/ItemRoom/ItemRoom.jsx';

import './Rooms.scss';

class Rooms extends Component {
	componentWillMount() {
		this.props.getRooms();
	}

	showModal() {
		this.refs.modal.open();
	}

	closeModal() {
		this.refs.modal.close();
	}

	render() {
		return (
			<div className="rooms">
				<Modal header="Create Room" body={FormRoom} ref="modal"></Modal>
				<Table hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Room</th>
							<th>player</th>
							<th className="join-button">
								<Button className="btn-primary" onClick={this.showModal.bind(this)}>
									Create room
								</Button>
							</th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.rooms.map((room) => (
								<ItemRoom history={this.props.history} key={room.id} room={room}/>
							))
						}
					</tbody>
				</Table>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({ rooms: state.rooms });

const mapDispatchToProps = (dispatch, ownProps) => ({
	getRooms: () => dispatch(getRooms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
