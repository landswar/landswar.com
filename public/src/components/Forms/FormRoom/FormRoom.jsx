import { Component } from 'react';
import { connect } from 'react-redux';
import { Errors, Form, Control } from 'react-redux-form';
import { Button } from 'react-bootstrap';

import { createRoom, updateRoom, deleteRoom } from '../../../redux/room/roomActions';
import { getMaps } from '../../../redux/map/mapActions';

import { minLength } from '../../../helpers/formValidators';

/**
 * Form to create a room
 */
class FormCreateRoom extends Component {
	/**
 	* Hook called before component mounted
	* Fetch rooms
 	*/
	componentWillMount() {
		this.props.getMaps();
	}

	/**
	 * On form submit
	 * @param {Object} room room model
	 */
	onSubmit(room) {
		if (this.props.update) {
			this.props.updateRoom(room);
			return;
		}
		this.props.createRoom(room);
	}

	/**
	 * On delete
	 * @param {Object} room room model
	 */
	onDelete() {
		this.props.deleteRoom(this.props.room.shortid);
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
			<Form className="form-room" model="roomForm"
				onSubmit={this.onSubmit.bind(this)} validateOn="submit">
				<Errors className="errors" model="roomForm"/>
				<div className="form-group">
					<label>Name</label>
					<Control.text className="form-control" model=".name"
						validateOn="change" validators={{ minLength: minLength(3) }}
					/>
					<Errors className="errors" model=".name" show="touched"
						messages={{
							minLength: 'The name must have at least 3 characters',
						}}
					/>
				</div>
				<div className="form-group">
					<label>Max players</label>
					<Control.text type="number" className="form-control" model=".maxPlayer" />
					<Errors className="errors" model=".maxPlayer"/>
				</div>
				<div className="form-group">
					<label>Map</label>
					<Control.select className="form-control" model=".idMap">
					{this.props.maps.map((map) => (<option value={map.id}>{map.name}</option>))}
					</Control.select>
					<Errors className="errors" model=".idMap"/>
				</div>
				{
					this.props.update ? (
						<div>
							<Button className="btn-primary" type="submit">Update</Button>
							<Button className="btn-primary" onClick={this.onDelete.bind(this)}>Delete</Button>
						</div>
					) : (<Button className="btn-primary" type="submit">Create</Button>)
				}
			</Form>
		);
	}
}

const mapStateToProps = (state) => ({
	room: state.room,
	maps: state.maps,
});

const mapDispatchToProps = (dispatch) => ({
	createRoom: (room) => dispatch(createRoom(room)),
	updateRoom: (room) => dispatch(updateRoom(room)),
	deleteRoom: (room) => dispatch(deleteRoom(room)),
	getMaps:    () => dispatch(getMaps()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateRoom);
