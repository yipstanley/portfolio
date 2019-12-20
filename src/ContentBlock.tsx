import React, { Component } from 'react';
import './css/ProjectList.css';
import ProjectCard from './ProjectCard'

export interface ContentBlockProps {
	section: string,
	content: string | JSX.Element
}

export default class ContentBlock extends Component<ContentBlockProps> {
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
