import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { getRoom } from '../../redux/room/roomActions';
import { startGame } from '../../redux/game/gameActions';
import { getToken } from '../../helpers/utils';

import Game from '../../components/Game/Game.jsx';
import FormRoom from '../../components/Forms/FormRoom/FormRoom.jsx';

/**
 * Room component
 */
class Room extends Component {
	/**
 	* Hook called before component mounted
	* Fetch room
 	*/
	componentWillMount() {
		this.props.getRoom(this.props.match.params.id);
	}

	/**
 	* render for owner of the room
	* @returns {JSX} return jsx
 	*/
	renderOwner() {
		console.log('here2');
		return (
			<div>
			<FormRoom update/>
			<Button onClick={this.props.startGame}>Start game</Button>
			</div>
		);
	}

	/**
 	* render the game
	* @returns {JSX} return jsx
	 */
	renderGame() {
		return (
			<Game shortIdRoom={this.props.room.shortid} tokenPlayer={getToken()}/>
		);
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		if (this.props.gameStarted) {
			return this.renderGame();
		} else if (this.props.room.owner === this.props.player.id) {
			return this.renderOwner();
		}
		return (
				<div>
					<h2>Waiting for players</h2>
					<Button onClick={this.props.startGame}>Start game</Button>
				</div>
		);
	}
}

Room.propTypes = {
	room: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
	room:        state.room,
	player:      state.player,
	gameStarted: state.gameStarted,
});

const mapDispatchToProps = (dispatch) => ({
	getRoom:   (id) => dispatch(getRoom(id)),
	startGame: (id) => dispatch(startGame(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
