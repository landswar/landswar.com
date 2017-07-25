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
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
			<div>
				<AddFriend friend={this.props.player} className="add-friend"/>
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
	player: state.player,
});

const mapDispatchToProps = (dispatch) => ({
	getPlayer: (id) => dispatch(getPlayer(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
