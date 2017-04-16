import { Component } from 'react';
import { connect } from 'react-redux';
import { Errors, Form, Control } from 'react-redux-form';
import { Button } from 'react-bootstrap';

import { createPlayer } from '../../redux/player/playerActions';
import { minLength } from '../../helpers/formValidators';

import './FormPlayer.scss';

class FormPlayer extends Component {
	onSubmit(player) {
		this.props.createPlayer(player.nickname, this.props.history);
	}

	render() {
		return (
			<Form className="form-player" model="player"
				onSubmit={this.onSubmit.bind(this)} validateOn="submit">
				<Errors className="errors" model="player"/>
				<div className="form-group">
					<label>Nickname</label>
					<Control.text
						className="form-control" model=".nickname"
						validateOn="change" validators={{ minLength: minLength(3) }}
					/>
					<Errors
						className="errors" model=".nickname"
						messages={{
							minLength: 'Your nickname must have at least 3 characters',
						}}
					/>
				</div>
				<Button className="btn-primary" type="submit">Send</Button>
			</Form>
		);
	}
}

const mapStateToProps = (state) => ({ isLogin: state.isLogin });

const mapDispatchToProps = (dispatch, ownProps) => ({
	createPlayer: (nickname, history) => dispatch(createPlayer(nickname, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormPlayer);
