import React, { Component } from 'react';
import './css/ProjectList.css';

export interface ProjectCardProps {
	element: Project,
	setPage: (page: string, withFade: boolean) => any;
}

export default class ProjectCard extends Component<ProjectCardProps> {
	imgClicked = () => {
		this.props.setPage(this.props.element.name, true)
	}

	render() {
		return (
			<div className="project-card-cont">
				<div className="project-img-cont">
					<img className="project-img" src={this.props.element.img}
						ref="img" height="100%" onClick={this.imgClicked} />
				</div>
				<div className="project-name">
					{this.props.element.name}
				</div>
				<div className="project-tech">
					{this.props.element.tech}
				</div>
			</div>
		);
	}
}