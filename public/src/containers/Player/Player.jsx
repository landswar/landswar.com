import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayer } from '../../redux/player/playerActions';

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
				<p>
					Player {this.props.player.nickname}
				</p>
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
