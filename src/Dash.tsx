import React, { Component } from 'react';
import './css/Dash.css';
import ContentBlock from './ContentBlock'
import ProjectCard from './ProjectCard'
import { DashProjects } from './Main';
import ProjectPage from './Project';

export default class Dash extends ProjectPage {
	sections = ["INTRO:", "PURPOSE:", "WORK:"]
	descriptions = [
		"Dash is an integrated environment for information management and gathering and the primary focus of Prof. Andy van Dam's Pen and Touch research lab. Living on an unbounded 2D canvas, users can import multiple different data types and manipulate information to their liking. After joining his group late freshman spring, I've learned more from this research group than I have in any other class I've taken so far.",
		"Dash is part of a series of projects that have tried to reconsider ideas presented in Vannevar Bush's As We May Think, and is focused on expanding the boundaries that the 1945 article describes.",
		"During my time so far at Dash, I've worked on many different projects. Follow one of the links below to read more about selected individual projects.",
	]

	renderProjects = () => {
		const items = DashProjects.map(item => <ProjectCard setPage={this.props.setPage} element={item} />)
		return items
	}

	render() {
		return (
			<div id="project-cont">
				<div id="meta-cont">
					<div className="title">
						{this.props.project.name}
					</div>
					<div id="purpose">
						{this.props.project.purpose}
					</div>
					<div id="timeline">
						{this.props.project.timeline}
					</div>
					<div id="tools">
						Tools used: {this.props.project.tools}
					</div>
				</div>
				<div id="info-cont">
					{this.renderInfo()}
				</div>

				<div id="dash-projects">
					{this.renderProjects()}
				</div>
			</div>
		);
	}
}