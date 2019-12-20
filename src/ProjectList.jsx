import React, { Component } from 'react';
import './css/ProjectList.css';
import ProjectCard from './ProjectCard.jsx'

class ProjectList extends Component {
	constructor(props) {
		super(props)

		this.getDisplay = this.getDisplay.bind(this)
		this.renderProject = this.renderProjects.bind(this)
	}

	getDisplay() {
		if (this.props.parent.state.page === "work") {
			return {display: "flex"}
		}
		return {display: "none"}
	}

	render() {
		return (
			<div id="project-list-cont" style={this.getDisplay()}>
				{this.renderProjects()}
			</div>
		);
	}

	renderProjects() {
		const items = this.props.parent.getProjects().map(item => {
			return <ProjectCard parent={this} element={item} />
		});
		return items;
		// return items.sort(this.sortByName);
	}
}


export default ProjectList;