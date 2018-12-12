import React, { Component } from 'react';
import './css/ProjectList.css';
import ProjectCard from './ProjectCard.jsx'
import Dash from './images/dash.PNG'
import Antonios from './images/antonios.PNG'
import CanaryTech from './images/canarytech.PNG'
import Watson from './images/watson.jpg'
import Shell from './images/shell.PNG'

const projects = [
	{name: "Dash", tech: "Research, C#, XAML, HCI, UIUX", img: Dash, linkTo: "dash.html", date: 999999},
	{name: "Antonio's Pizza Website Redesign", tech: "UIUX, HTML/CSS, JavaScript, Figma, Balsamiq",
		img: Antonios, linkTo: "redesign.html", date: 201810},
	{name: "Canary Technologies", tech: "UIUX, Figma", img: CanaryTech, linkTo: "iterative.html", date: 201811},
	{name: "Design @ Watson Institute", tech: "Design, Adobe Illustrator", img: Watson, linkTo: "watson.html", date: 201800},
	{name: "Shell", tech: "C", img: Shell, linkTo: "shell.html", date: 201810},
]

class ProjectList extends Component {
	constructor(props) {
		super(props)

		this.getDisplay = this.getDisplay.bind(this)
	}

	getDisplay() {
		if (this.props.page === "work") {
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
		const items = projects.map(item => {
			return <ProjectCard parent={this} element={item} />
		});
		return items.sort(this.sortByName);
	}
}


export default ProjectList;