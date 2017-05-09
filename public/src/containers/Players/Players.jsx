import { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import { getPlayers } from '../../redux/player/playerActions';

import ItemPlayer from '../../components/ItemPlayer/ItemPlayer.jsx';

/**
 * Players component, List all player
 * View /players
 */
class Players extends Component {
	/**
 	* Hook called before component mounted
	* Fetch Players
 	*/
	componentWillMount() {
		this.props.getPlayers();
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
			<div className="rooms">
				<Table hover>
					<thead>
						<tr>
							<th>#</th>
              <th>Nickname</th>
              <th>Score</th>
              <th></th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.players.map((player) => (
								<ItemPlayer history={this.props.history} key={player.id} player={player}/>
							))
						}
					</tbody>
				</Table>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ players: state.players });

const mapDispatchToProps = (dispatch) => ({
	getPlayers: () => dispatch(getPlayers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
