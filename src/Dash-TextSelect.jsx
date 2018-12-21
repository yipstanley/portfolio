import React, { Component } from 'react';
import './css/Dash.css';
import ContentBlock from './ContentBlock.jsx'
import ChromeSelection from './images/dash/chromeselect.gif'
import Version1 from './images/dash/original-dash-selection.PNG'
import Version2 from './images/dash/currselect.gif'

const sections = ["INTRO:", "VERSION 1:", "RETHINKING:", "SOLUTION:", "CONCLUSION:"]
const descriptions = [
	"In general, PDF's are great for displaying text and images in arbitrary complex formats. However, once generated, there isn't currently a foolproof way of letting users select text on a PDF. The PDF reader relies on the order in which the PDF was generated in to determine the order that text should be selected in, but for some PDFs, this order is incredibly erred. Take, for example, this PDF:",
	"Our first iteration at tackling this problem was simple, but too simple. We tried just organizing elements from top-down, left-right, but that fails on many different instances. On the same PDF, although the selection is better, it's nowhere near optimal.",
	"After this failed first attempt, we started thinking of different ways to organize PDF text. We did some of our own research and looked into how different PDF readers went about doing this. We eventually came across an article that described Okular's method of dealing with this problem. I ended up implementing an algorithm that employs a similar process. In 13 hours, we ended up with something that looked like this:",
	"If you're not interested in the technical process, feel free to skip over this part! Ultimately the process focused on preprocessing the PDF to retrieve statistical data about the character spacing, word spacing, column spacing, and line spacing. I used a K-Means Cluster algorithm on 1-dimensional data to get those values, and using those values, interpreted the PDF with increasingly lax constraints, essentially performing a form of a multi-stage XY-cut algorithm. As a result, we ended up with small sections that had the text organized naively, but the small sections were organized into larger sections naively, and the larger sections were organized in pages naively. At the very end, we had a PDF that split its text up into chunks, and we used those sections to understand the order in which we select text.",
	"Ultimately, this algorithm isn't perfect. There are small edge cases that we have yet to account for, and I plan on refactoring the algorithm to make it easier to understand and work in more situations. I've learned a lot from this project about PDFs, algorithm design, and debugging techniques. One of the big takeaways for me was the importance of having a strong connection between the front-end and back-end of a program. In this example, the PDF looked perfectly fine and all of the elements were there visually, and the back end support for selecting and loading PDFs worked nearly flawlessly, but the missing factor was the bridge between those two."
]

class TextSelect extends Component {
	constructor(props) {
		super(props)

		this.getDisplay = this.getDisplay.bind(this)
		this.backToDash = this.backToDash.bind(this)
	}

	getDisplay() {
		if (this.props.parent.state.page.toLowerCase() === "pdf text selection") {
			return {display: "flex"}
		}
		return {display: "none"}
	}

	backToDash() {
		this.props.parent.fadeTo("dash")
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
				<div id="back" onClick={this.backToDash}>
					&lt; Back to Dash
				</div>
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
					<ContentBlock section="" content={<img className="project-sub-img" src={Version1} />} />
					<div id="info-sub">
						How could we do better?
					</div>
					{this.renderInfo(2, 3)}
					<ContentBlock section="" content={<img className="project-sub-img" src={Version2} />} />
					{this.renderInfo(3, 5)}
				</div>
			</div>
		);
	}
}


export default TextSelect;