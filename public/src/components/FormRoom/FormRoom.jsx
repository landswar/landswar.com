import { Component } from 'react';
import { connect } from 'react-redux';
import { Errors, Form, Control } from 'react-redux-form';
import { Button } from 'react-bootstrap';

import { createRoom } from '../../redux/room/roomActions';

import { minLength } from '../../helpers/formValidators';

class FormCreateRoom extends Component {
	onSubmit(room) {
		this.props.createRoom(room);
	}

	render() {
		return (
			<Form className="form-room" model="room"
				onSubmit={this.onSubmit.bind(this)} validateOn="submit">
				<Errors className="errors" model="room"/>
				<div className="form-group">
					<label>Name</label>
					<Control.text className="form-control" model=".name"
						validateOn="change" validators={{ minLength: minLength(3) }}
					/>
					<Errors className="errors" model=".name"
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
				<Button className="btn-primary" type="submit">Create</Button>
			</Form>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
	createRoom: (room) => dispatch(createRoom(room)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateRoom);
