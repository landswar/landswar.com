import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { getPlayer } from '../../redux/player/playerActions';
import AddFriend from '../../components/Friend/AddFriend.jsx';

import './Player.scss';

/**
 * Player component
 * View /player/:id
 */
class Player extends Component {
	/**
 	* Hook called before component mounted
	* Fetch room
 	*/
	componentWillMount() {
		this.props.getPlayer(this.props.match.params.id);
	}

	/**
 	* Hook called before component mounted
	* Fetch room
 	*/
	componentDidUpdate() {
		if (+this.props.match.params.id !== this.props.player.id) {
			this.props.getPlayer(this.props.match.params.id);
		}
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		let mode = 'add';
		if (this.props.friendRequestListId.indexOf(this.props.player.id) !== -1) {
			mode = 'accept';
		} else if (this.props.friendListId.indexOf(this.props.player.id) !== -1) {
			mode = 'refuse';
		} else if (this.props.user.id === this.props.player.id) {
			mode = undefined;
		}

		return (
			<div>
				{
					mode ?
						(<AddFriend mode={mode} friend={this.props.player} className="add-friend"/>) :
						undefined
				}
				<Panel header={(<h3>Player name</h3>)}>
					{this.props.player.nickname}
				</Panel>
				<Panel header={(<h3>Player email</h3>)}>
					{this.props.player.email}
				</Panel>
			</div>
		);
	}
}

Player.propTypes = {
	player: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
	player:              state.player,
	friendRequestListId: state.friendRequest.map((friend) => friend.id),
	friendListId:        state.friends.map((friend) => friend.id),
	user:                state.user,
});

const mapDispatchToProps = (dispatch) => ({
	getPlayer: (id) => dispatch(getPlayer(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
