import React, { Component } from 'react';
import './css/Dash.css';
import ContentBlock from './ContentBlock.jsx'
import ChromeSelection from './images/dash/chromeselect.gif'

const sections = ["INTRO:", "VERSION 1:"]
const descriptions = [
	"In general, PDF's are great for displaying text and images in arbitrary complex formats. However, once generated, there isn't currently a foolproof way of letting users select text on a PDF. The PDF reader relies on the order in which the PDF was generated in to determine the order that text should be selected in, but for some PDFs, this order is incredibly erred. Take, for example, this PDF:",
	"Our first iteration at tackling this problem was simple, but too simple."
]

class TextSelect extends Component {
	constructor(props) {
		super(props)

		this.getDisplay = this.getDisplay.bind(this)
	}

	getDisplay() {
		if (this.props.parent.state.page.toLowerCase() === "pdf text selection") {
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
				</div>
				<div id="info-cont">
					{this.renderInfo(0, 1)}
					<ContentBlock section="" content={<img className="project-sub-img" src={ChromeSelection} />} />
					{this.renderInfo(1, 2)}
				</div>
			</div>
		);
	}
}


export default TextSelect;