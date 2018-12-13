import React, { Component } from 'react';
import './css/ProjectList.css';
import ProjectCard from './ProjectCard.jsx'

class ContentBlock extends Component {
	render() {
		return (
			<div className="content-block">
				<div className="content-block-section">
					{this.props.section}
				</div>
				<div className="content-block-content">
					{this.props.content}
				</div>
			</div>
		);
	}
}


export default ContentBlock;