import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'react-bootstrap';

import { getRooms } from '../../redux/room/roomActions';

import Modal from '../../components/Generic/Modal/Modal.jsx';
import FormRoom from '../../components/Forms/FormRoom/FormRoom.jsx';
import ItemRoom from '../../components/ItemRoom/ItemRoom.jsx';

import './Rooms.scss';

/**
 * Rooms component
 * List all room
 */
class Rooms extends Component {
	/**
 	* Hook called before component mounted
	* Fetch rooms
 	*/
	componentWillMount() {
		this.props.getRooms();
	}

	/**
	 * Open modal
	 */
	showModal() {
		this.refs.modal.open();
	}

	/**
	 * Close modal
	 */
	closeModal() {
		this.refs.modal.close();
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
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

Rooms.propTypes = {
	rooms: React.PropTypes.array,
};

const mapStateToProps = (state) => ({ rooms: state.rooms });

const mapDispatchToProps = (dispatch) => ({
	getRooms: () => dispatch(getRooms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
