import { Component } from 'react';
import { connect } from 'react-redux';

const WEBSOCKETS_URL = process.env.WEBSOCKETS_URL;

/**
 * Game component
 */
class Game extends Component {
	/**
	 * Hook called after component rendered
	 */
	componentDidMount() {
		const gameRules = {};
		fetch(`${process.env.API_URL}/grounds`)
			.then((response) => response.json())
			.then((grounds) => {
				gameRules.grounds = grounds;
			})
			.catch((error) => logger.error(error));
		const config = {
			divIdName:   'game',
			height:      640,
			width:       1280,
			tokenPlayer: process.env.TOKEN_PLAYER,
			shortIdRoom: process.env.SHORTID_ROOM,
			socketUrl:   WEBSOCKETS_URL,
			gameRules,
		};
		const landsWar = new LandsWar(config);
		landsWar.start().catch((error) => {
			logger.error(error);
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
