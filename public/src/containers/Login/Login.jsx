import { Component } from 'react';
// import FacebookLogin from 'react-facebook-login';
// import {Button} from 'react-bootstrap';

import './Login.scss';

import FormLogin from '../../components/Forms/FormLogin/FormLogin.jsx';
import FormSubscribe from '../../components/Forms/FormSubscribe/FormSubscribe.jsx';

/**
 * Login/Create player container
 */
class LoginContainer extends Component {
	/**
	 * constructor state showLogin handle switch between login/create form
	 * @param {*} props  props
	 */
	constructor(props) {
		super(props);
		this.state = {
			showLogin: true,
		};
	}

	/**
	 * toggleForm login/create player
	 */
	toggleForm() {
		this.setState({ showLogin: !this.state.showLogin });
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
            <div className="login-container">
                {
                    this.state.showLogin ?
                    (<FormLogin history={this.props.history}/>) :
                    (<FormSubscribe history={this.props.history}/>)
                }
								<div className="footer-login">
									<a className="item" onClick={this.toggleForm.bind(this)}>{this.state.showLogin ? 'Subscribe' : 'Login'}</a>
								</div>
						</div>
		);
	}
}

export default LoginContainer;
/*
<FacebookLogin
	cssClass="facebook-login item btn-primary"
	appId="1088597931155576"
	autoLoad={true}
	fields="name,email,picture"
	onClick={(res) => logger.debug(res)}
	callback={(res) => logger.debug(res)}
/>
*/
