import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Home Component of a player
 */
class Home extends Component {

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
			<div>
				<h2>Home player</h2>
				<div className="vertical-align">
					<h1>Nickname: </h1>
					<h1>{this.props.user.nickname}</h1>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	user: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
	user: state.user,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
