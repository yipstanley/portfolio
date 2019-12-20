import React, { Component } from 'react';
import './css/Dash.css';
import ContentBlock from './ContentBlock'
import ChromeSelection from './images/dash/chromeselect.gif'
import Version1 from './images/dash/original-dash-selection.PNG'
import Version2 from './images/dash/currselect.gif'
import { Paths } from './Main';
import ProjectPage from './Project';

export default class TextSelect extends ProjectPage {
	sections = ["INTRO:", "VERSION 1:", "RETHINKING:", "SOLUTION:", "CONCLUSION:"]
	descriptions = [
		"In general, PDF's are great for displaying text and images in arbitrary complex formats. However, once generated, there isn't currently a foolproof way of letting users select text on a PDF. The PDF reader relies on the order in which the PDF was generated in to determine the order that text should be selected in, but for some PDFs, this order is incredibly erred. Take, for example, this PDF:",
		"Our first iteration at tackling this problem was simple, but too simple. We tried just organizing elements from top-down, left-right, but that fails on many different instances. On the same PDF, although the selection is better, it's nowhere near optimal.",
		"After this failed first attempt, we started thinking of different ways to organize PDF text. We did some of our own research and looked into how different PDF readers went about doing this. We eventually came across an article that described Okular's method of dealing with this problem. I ended up implementing an algorithm that employs a similar process. In 13 hours, we ended up with something that looked like this:",
		"At a higher level, the process focused on preprocessing the PDF to retrieve statistical data about the PDF in question. We then built up an hierarchical 2D space of sections that we could use to determine how to select the PDF.",
		"Ultimately, this algorithm isn't perfect. There are small edge cases that we have yet to account for, and I plan on refactoring the algorithm to make it easier to understand and work in more situations. I've learned a lot from this project about PDFs, algorithm design, and debugging techniques. One of the big takeaways for me was the importance of having a strong connection between the front-end and back-end of a program. In this example, the PDF looked perfectly fine and all of the elements were there visually, and the back end support for selecting and loading PDFs worked nearly flawlessly, but the missing factor was the bridge between those two."
	]

	backToDash = () => {
		this.props.setPage(Paths.Dash, true)
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