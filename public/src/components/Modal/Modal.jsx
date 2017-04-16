import React, { Component } from 'react';
import { Button, Modal as ModalB } from 'react-bootstrap';

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
		};
	}

	open() {
		this.setState({ showModal: true });
	}

	close() {
		this.setState({ showModal: false });
	}

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
