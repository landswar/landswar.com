import React, { Component } from 'react';
import { Button, Modal as ModalB } from 'react-bootstrap';

/**
 * Modal component
 */
class Modal extends Component {
	/**
	 * constructor set state "showModal": false
	 * @param {*} props props
	 */
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
		};
	}

	/**
 	* Open the modal
 	*/
	open() {
		this.setState({ showModal: true });
	}

	/**
 	* Close the modal
 	*/
	close() {
		this.setState({ showModal: false });
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
			<ModalB show={this.state.showModal}>
				<ModalB.Header>
					{this.props.header}
					<Button type="button" className="close"
							onClick={this.close.bind(this)} aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</Button>
				</ModalB.Header>
				<ModalB.Body>
					{React.createElement(this.props.body, this.props)}
				</ModalB.Body>
			</ModalB>
		);
	}
}

export default Modal;
