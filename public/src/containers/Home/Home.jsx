import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import FormPlayer from '../../components/Forms/FormPlayer/FormPlayer.jsx';

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
				<FormPlayer/>
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
