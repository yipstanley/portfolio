import React, { Component } from 'react';
import './css/Dash.css';
import ContentBlock from './ContentBlock.jsx'
import OldInterface from './images/redesign/old-antonios.PNG'
import Wireframe from './images/redesign/wireframe.png'
import HiFi from './images/redesign/hifi.PNG'
import AnnotatedHiFi from './images/redesign/hifi-annotate.jpg'
import Final from './images/redesign/Redesign.mp4'

const sections = ["INTRODUCTION:", "", "USABILITY:", "HIGH-FIDELITY:", "", "DEVELOPMENT:"]
const descriptions = [
	"As part of an assignment for CS 1300: User Interfaces and User Experiences, we were tasked with redesigning an existing public interface that we felt did not meet the standards that we talked about in class. One of the pizza shops that I frequent happens to have a very outdated and frustrating interface.",
	"This is the current website for the Providence location of Antonio’s Pizza.",
	"Beginning with low-fidelity wireframing, I had in mind these shortcomings and wanted to address them immediately. Below is a screen that I created in Balsamiq that tries to address these concerns and increase general layout clarity by removing the amount of clutter on the screen.",
	"From these wireframes, I began to build a high-fidelity protoype. I began to think about the more visual elements, and decided that no good redesign would throw away the identity of the interface it came from and stuck with the logo and colors.",
	"This is what I came up with.",
	"Now came the difficult part of the project- coding and making the actual website responsive. I first plotted out how I wanted the website to react to changes in window size before tackling the implementation of it."
]

class Redesign extends Component {
	constructor(props) {
		super(props)

		this.getDisplay = this.getDisplay.bind(this)
	}

	getDisplay() {
		if (this.props.parent.state.page.toLowerCase() === "antonio's pizza website redesign") {
			return {display: "flex"}
		}
		return {display: "none"}
	}

	renderInfo(start, end) {
		let items = [];
		for (let i = start; i < end && i < descriptions.length; i++) {
			items.push(<ContentBlock section={sections[i]} content={descriptions[i]} />)
		}
		return items;
	}

	render() {
		return (
			<div id="project-cont" style={this.getDisplay()}>
				<div id="meta-cont">
					<div id="title">
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
					{this.renderInfo(0, 1)}
					<ContentBlock section="" content={<img className="project-sub-img" src={OldInterface} />} />
					{this.renderInfo(1, 3)}
					<ContentBlock section="" content={<img className="project-sub-img" src={Wireframe} />} />
					{this.renderInfo(3, 5)}
					<ContentBlock section="" content={<img className="project-sub-img" src={HiFi} />} />
					{this.renderInfo(5, 6)}
					<ContentBlock section="" content={<img className="project-sub-img" src={AnnotatedHiFi} />} />
					<ContentBlock section="Final" content={<video className="project-sub-img" src={Final} />} />
				</div>
			</div>
		);
	}
}


export default Redesign;