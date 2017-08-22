import { Component } from 'react';
import { connect } from 'react-redux';

const WEBSOCKETS_URL = process.env.WEBSOCKETS_URL;
const API_URL = process.env.API_URL;

/**
 * Game component
 */
class Game extends Component {
	/**
	 * Hook called after component rendered
	 */
	componentDidMount() {
		const gameRules = {};
		fetch(`${API_URL}/grounds`)
			.then((response) => response.json())
			.then((grounds) => {
				gameRules.grounds = grounds;
			})
			.catch((error) => logger.error(error));
		const config = {
			divIdName:   'game',
			height:      window.innerHeight - 100,
			width:       window.innerWidth - 50,
			tokenPlayer: this.props.tokenPlayer,
			shortIdRoom: this.props.shortIdRoom,
			socketUrl:   WEBSOCKETS_URL,
			gameRules,
		};
		const landsWar = new LandsWar.default(config);
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
