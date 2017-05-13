import { Component } from 'react';
import { connect } from 'react-redux';
import { Errors, Form, Control } from 'react-redux-form';
import { Button } from 'react-bootstrap';

import { createPlayer } from '../../../redux/player/playerActions';
import { minLength, match, required } from '../../../helpers/formValidators';

/**
 * Create player form
 */
class FormPlayer extends Component {
	/**
	 * On form submit
	 * @param {Object} player player model
	 */
	onSubmit(player) {
		this.props.createPlayer(player);
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
      <Form
        className="form-login"
        model="newPlayer"
        onSubmit={this.onSubmit.bind(this)}
        validators={{ '': { passwordsMatch: match('password', 'passwordConfirm') } }}
        validateOn="submit">
        <Errors className="errors" model="newPlayer" show="touched"
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
        <div className="form-group">
          <label>Password</label>
          <Control type="password" className="form-control" model=".password"
          placeholder="Password" validators={{ require: required }}/>
          <Errors className="errors" show="touched" model=".password" messages={{ require: 'Password is required' }}/>
        </div>
        <div className="form-group">
          <label>Password confirmation</label>
          <Control type="password" className="form-control" model=".passwordConfirm"
          placeholder="Password confirmation"/>
        </div>
        <Button className="btn-primary" type="submit">Create</Button>
      </Form>
		);
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
	createPlayer: (player) =>
		dispatch(createPlayer(player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormPlayer);
