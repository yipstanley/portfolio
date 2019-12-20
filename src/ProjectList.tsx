import React, { Component } from 'react';
import './css/ProjectList.css';
import ProjectCard from './ProjectCard'
import { Projects } from './Main';

export interface ProjectListProps {
	setPage: (page: string, withFade: boolean) => any;
}

export default class ProjectList extends Component<ProjectListProps> {
	render() {
		return (
			<div id="project-list-cont">
				{this.renderProjects()}
			</div>
		);
	}

	renderProjects() {
		// return (null)
		const items = Projects.map(item => {
			return <ProjectCard setPage={this.props.setPage} element={item} />
		});
		return items;
		//return items.sort(this.sortByName);
	}
}