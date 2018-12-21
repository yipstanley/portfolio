import React, { Component } from 'react';
import './css/Dash.css';
import ContentBlock from './ContentBlock.jsx'
import WI_1 from './images/watson/wi_1.jpg'
import WI_2 from './images/watson/wi_2.jpg'
import WI_3 from './images/watson/wi_3.jpg'
import WI_4 from './images/watson/wi_4.jpg'
import WI_5 from './images/watson/wi_5.jpg'
import WI_6 from './images/watson/wi_6.jpg'

const sections = ["CONTEXT:"]
const descriptions = [
	"During my first year at Brown, I worked as a graphic designer for the Watson Institute. Often, I would be asked to design a poster for an event, and I'd be tasked with creating three different sizes (11\"x14\", 1920x1080px, and 1080x1920px). Below is a gallery of selected designs during my year as a designer.",
]
const gallery = [WI_1, WI_2, WI_3, WI_4, WI_5, WI_6]

class Watson extends Component {
	constructor(props) {
		super(props)

		this.getDisplay = this.getDisplay.bind(this)
	}

	getDisplay() {
		if (this.props.parent.state.page.toLowerCase() === "design @ watson institute") {
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

	renderGallery() {
		return gallery.map(item => {return <a href={item} className="gallery-link" target="_blank"><img className="gallery-img" src={item} /></a>})
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
				</div>
				<div id="gallery-cont">
					{this.renderGallery()}
				</div>
			</div>
		);
	}
}


export default Watson;