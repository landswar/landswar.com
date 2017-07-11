import { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Game component
 */
class Game extends Component {
	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
            <h2>Game to include in /src/components/Game/Game.jsx</h2>
		);
	}
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
