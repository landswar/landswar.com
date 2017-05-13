import { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { push } from 'react-router-redux';

/**
 * ItemPlayer render in Rooms.jsx
 */
class ItemPlayer extends Component {
	/**
 	* Redirect to room
 	*/
	watchPlayer() {
		this.props.redirect(`/player/${this.props.player.id}`);
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
			<tr>
				<td>{this.props.player.id}</td>
				<td>{this.props.player.nickname}</td>
				<td>Medals... TODO</td>
				<td className="watch-button">
					<Button className="btn-primary" onClick={this.watchPlayer.bind(this)}>Watch</Button>
				</td>
			</tr>
		);
	}
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
	redirect: (location) => dispatch(push(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPlayer);
