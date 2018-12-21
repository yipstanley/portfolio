import React, { Component } from 'react';
import './css/Dash.css';
import ContentBlock from './ContentBlock.jsx'
import OldInterface from './images/database.PNG'

const sections = ["CONTEXT:", "PROBLEM:", "SOLUTION 1:", "SOLUTION 2:", "SOLUTION 3:", "CONCLUSION:"]
const descriptions = [
	"By this point, we have a pretty well functioning PDF view, our text selection on PDFs is at an acceptable state, and we're able to work with PDFs at a complex level.",
	"However, because we're doing such taxing preprocessing on PDFs, we suddenly have a powerfully functioning tool that takes a lot of resources away from the computer to load. Workspaces with 10 or 20 PDFs can take upwards of 30 seconds to fully load, and sometimes, we're even running out of memory due to the insane memory usage all the preprocessing requires. How can we solve this?",
	"The first solution we tried to implement involved virtualizing the the elements of text on a PDF. This means that a PDF would only load 2 or 3 pages of text selections at a time, and this would avoid overloading the program. However, we quickly discovered that this solution wouldn't work, as though it solved our problem, it caused frequent freezes whenver it tried to load more pages of text. :(",
	"We then considered taking the information from a PDF and saving it to a database. This solution actually turned out to work really well, as the preprocessing of a PDF is only performed once, when it's initially imported. Past that, any more loads on the PDF were much quicker, and this greatly solved our problem of dealing with the slow load time. We ended up with a database that looks like this:",
	"Though solution 2 increased load time significantly, we still had frequent crashes due to excessive use of resources when loading a workspace with 10 or 20 PDFs. To solve this, we decided to virtualize PDFs, but in a different way. Because you can't select text on a PDF unless the PDF is selected, we simply didn't load text selection for a PDF until the user selected the PDF.",
	"Ultimately, this problem didn't turn out to be the most difficult one to solve. Though complex, we knew what we could try, and in the things we wanted to try, we solved our original problem. For me, this project taught me a lot about basic techniques to make problems like this easier to solve, namely data virtualization and caching."
]

class DashDatabase extends Component {
	constructor(props) {
		super(props)

		this.getDisplay = this.getDisplay.bind(this)
		this.backToDash = this.backToDash.bind(this)
	}

	getDisplay() {
		if (this.props.parent.state.page.toLowerCase() === "pdf database") {
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
					{this.renderInfo(0, 4)}
					<ContentBlock section="" content={<img className="project-sub-img" src={OldInterface} />} />
					{this.renderInfo(4, 6)}
				</div>
			</div>
		);
	}
}


export default DashDatabase;