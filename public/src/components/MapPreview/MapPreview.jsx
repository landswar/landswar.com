import { Component } from 'react';

const API_URL = process.env.API_URL;

/**
 * MapPreview element
 */
class MapPreview extends Component {
	/**
 	* On ComponentMounted set default state if needed {height, width}
 	*/
	ComponentMounted() {
		this.setState({
			height: this.props.height ? '48px' : `${this.props.height}px`,
			width:  this.props.width ? '48px' : `${this.props.width}px`,
		});
	}

	/**
 	* toggle preview image
 	*/
	toggle() {
//		console.log("toggle image preview");
	}

	/**
 	* render
	* @returns {JSX} return jsx
 	*/
	render() {
		return (
			<div>
				<img onClick={this.toggle.bind(this)}
								src={`${API_URL}/maps/${this.props.map.id}/preview`}
								height={this.props.height}
								width={this.props.width}>
						</img>
					<h2>width: {this.props.map.data.width}  height: {this.props.map.data.height}</h2>
			</div>
		);
	}
}

export default MapPreview;
