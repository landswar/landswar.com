import { Component } from 'react';
import { connect } from 'react-redux';

const WEBSOCKETS_URL = process.env.WEBSOCKETS_URL;
const API_URL = process.env.API_URL;

/**
 * Game component
 */
class Game extends Component {
	/**
	 * fetch static data
	 * @return {Object} game data
	 */
	async fetchGameRules() {
		const gameRules = {};

		gameRules.grounds = await (await fetch(`${API_URL}/grounds`)).json();
		gameRules.units = await (await fetch(`${API_URL}/units`)).json();

		return gameRules;
	}
	/**
	 * Hook called after component rendered
	 */
	componentDidMount() {
		this.fetchGameRules().then((gameRules) => {
			const config = {
				divIdName:   'game',
				height:      640, //window.innerHeight - 100,
				width:       1280, //window.innerWidth - 50,
				tokenPlayer: this.props.tokenPlayer,
				shortIdRoom: this.props.shortIdRoom,
				socketUrl:   WEBSOCKETS_URL,
				gameRules,
			};

			const landsWar = new LandsWar.default(config); // eslint-disable-line new-cap
			landsWar.start().catch((error) => {
				logger.error(error);
			});
		});
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
			<div id="game"></div>
		);
	}
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
