import React, { Component } from 'react';
import './css/ProjectList.css';

class ProjectCard extends Component {
	constructor(props) {
		super(props)

		this.imgClicked = this.imgClicked.bind(this)
	}

	imgClicked() {
		this.props.parent.props.parent.setState({
			page: this.props.element.name
		})
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


export default ProjectCard;