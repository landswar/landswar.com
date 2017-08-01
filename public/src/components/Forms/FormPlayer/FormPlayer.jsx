import { Component } from 'react';
import { connect } from 'react-redux';
import { Errors, Form, Control } from 'react-redux-form';
import { Button } from 'react-bootstrap';

import { updatePlayer } from '../../../redux/player/playerActions';
import { minLength, required } from '../../../helpers/formValidators';

/**
 * Create player form
 */
class FormPlayer extends Component {
	/**
	 * On form submit
	 * @param {Object} player player model
	 */
	onSubmit(player) {
		this.props.updatePlayer(player);
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
      <Form
        className="form-player"
        model="user"
        onSubmit={this.onSubmit.bind(this)}
        validateOn="submit">
        <Errors className="errors" model="user" show="touched"
        messages={{ passwordsMatch: 'Password confirmation error' }}/>
        <div className="form-group">
          <label>Email</label>
          <Control type="email" className="form-control" model=".email" validateOn="change"
          placeholder="email@example.com" validators={{ require: required }}/>
          <Errors
            className="errors" model=".email" show="touched"
            messages={{ require:      'Email is required',
	typeMismatch: 'Invalid email address' }}/>
        </div>
        <div className="form-group">
          <label>Nickname</label>
          <Control.text className="form-control" model=".nickname" placeholder="Nickname"
          validators={{ minLength: minLength(3) }}/>
          <Errors
            className="errors" model=".nickname" show="touched"
            messages={{ minLength: 'Your nickname must have at least 3 characters' }}/>
        </div>
        <Button className="btn-primary" type="submit">Update</Button>
      </Form>
		);
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
	updatePlayer: (player) =>
		dispatch(updatePlayer(player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormPlayer);
