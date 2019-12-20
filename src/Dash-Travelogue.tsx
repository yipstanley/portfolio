import React, { Component } from 'react';
import './css/Dash.css';
import ContentBlock from './ContentBlock'
import Travelogue from './images/travelogue.PNG'
import ProjectPage from './Project';

export default class DashTravelogue extends ProjectPage {
	sections = ["CONTEXT:", "PLANNING:", "", "THE TASK:", "STATE:", "GOALS:"]
	descriptions = [
		"Dash is a program that lets you do a lot of very different things, and in theory, you'd do a lot of different actions, some of which are more important and noteworthy than others. That's where the idea came for keeping track of those important actions that users may do. The travelogue is our first attempt at implementing and displaying a collection of the user's most important events during their time IN Dash.",
		"This gets a bit technical, so feel free to skip onto the next section! In Dash, we've created the notion that everything is a document, where a document is a list of key-value pairs. This means that collections are documents with a list of documents, links are documents with to and from documents, etc. This allows us to perform very powerful actions easily, since there's nothing separating anything from one another except the specific list of key-value pairs that each document contains.",
		"Knowing that, we're able to extend this notion by making events documents. With this abstraction, we can then create different views for events, keep track of events, link to and from events, and customize events to our liking. The list is endless, but we get all of this free functionality simply from making events documents.",
		"The project started with just a small experiment to see how easily we could implement this somewhat complicated functionality. It turned out (with the right implementation) to be a lot easier than expected. I started off by creating a universal Event Manager that kept track of events that happened.",
		"Right now, we support events for annotating, note-taking, and web surfing. Although not beautiful, this is what our current travelogue looks like:",
		"Moving forward, we want to add support for more actions (scripting, searching, the list goes on) and eventually come up with a metric for determining more important subactions (how do we know when an annotation is more important than others?). Furthermore, we want to make the travelogue look nicer and more intuitive."
	]


	backToDash = () => {
		this.props.setPage("dash", true)
	}

	render() {
		return (
			<div id="project-cont">
				<div id="back" onClick={this.backToDash}>
					&lt; Back to Dash
				</div>
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
				</div>
				<div id="info-cont">
					{this.renderInfo(0, 5)}
					<ContentBlock section="" content={<img className="project-sub-img" src={Travelogue} />} />
					{this.renderInfo(5, 6)}
				</div>
			</div>
		);
	}
}