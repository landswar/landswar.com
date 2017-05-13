import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Errors, Form, Control } from 'react-redux-form';
import { Button } from 'react-bootstrap';

import { login } from '../../../redux/auth/authActions';
import { required } from '../../../helpers/formValidators';

/**
 * Login form
 */
class FormLogin extends Component {
	/**
	 * On form submit
	 * @param {Object} player player model
	 */
	onSubmit(player) {
		this.props.login(player.nickname, player.password, this.props.history);
	}

  onSubmitFailed(player) {
    console.log(player);
  }

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
      <Form
        className="form-login"
        model="user"
        onSubmit={this.onSubmit.bind(this)}
        onSubmitFailed={ (player) => this.onSubmitFailed(player) }
        validateOn="submit">
        <Errors className="errors" model="user"/>
        <div className="form-group">
          <label>Nickname/Email</label>
          <Control.text className="form-control" model=".nickname" validateOn="change"
          placeholder="Nickname/Email" validators={{ require: required }}/>
          <Errors className="errors" model=".nickname" show="touched"
            messages={{ require: 'Nickname required' }}/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <Control type="password" className="form-control" model=".password" validateOn="change"
          placeholder="Password" validators={{ require: required }}/>
          <Errors className="errors" model=".password" show="touched"
            messages={{ require: 'Password required' }}/>
        </div>
        <Button className="btn-primary" type="submit">Log in</Button>
      </Form>
		);
	}
}

FormLogin.propTypes = {
	isLogin: React.PropTypes.bool,
};


const mapStateToProps = (state) => ({ isLogin: state.isLogin });

const mapDispatchToProps = (dispatch) => ({
	login: (nickname, password, history) => dispatch(login(nickname, password, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
