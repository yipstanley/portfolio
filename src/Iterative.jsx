import React, { Component } from 'react';
import './css/Dash.css';
import ContentBlock from './ContentBlock.jsx'
import Sketch1 from './images/iterative/sketch1.PNG'
import Sketch2 from './images/iterative/sketch2.PNG'
import Sketch3 from './images/iterative/sketch3.PNG'
import Sketch4 from './images/iterative/sketch4.PNG'
import HomeHeatmap from './images/iterative/home-heatmap.png'
import GuestHeatmap from './images/iterative/guest-heatmap.png'

const sections = ["DISCLAIMER:","INTRO:", "", "ESSENTIALS:", "SKETCHES", "PROTOTYPING:", "CRITIQUE:", "EYETRACKING:", "THE TASK:", "RESULTS:", "CONCLUSION:"]
const descriptions = [
	"I do not work for Canary Technologies, this was a school project.",
	"Coming from Las Vegas, I've seen my fair share of hotels. Often times, the entire process of staying at a hotel is difficult and time-consuming. When you arrive, you're expected to wait, sometimes hours, just to get your payment through, sign contracts, and retrieve your room key.",
	"Canary Technologies is a startup focused on remedying these problems by providing an application for hotel employees that's quick to learn, easy to use, and efficient. In my User Interfaces and User Experiences class, I paired up with 3 other students to build a design while practicing principles of iterative design and eye-tracking analysis. To practice the iterative design process, our group of four created a prototype of a desktop application for a startup, beginning with various sketches and building up to a high-fidelity, interactive prototype. We then tested this prototype on a user, tracking and analyzing their eye movements as they navigated through the app.",
	"One of the challenges of the project was fulfilling the startup's goals without being able to directly ask them what they wanted in their application. We talked through a typical process for booking and staying at a hotel, and some common items an application would need. With this in mind, we prototyped a desktop application that manages digital contract signing, payment authorization, booking rooms, and guest amenities.",
	"Beginning the iterative design process, we sketched four distinct interface designs, each with unique navigation flows.",
	"Despite their differences, we felt that each sketch had some valuable features we should include in our final prototype. While some sketches did a good job of representing a large quantity of information, others did a better job of controlling the flow of navigation concisely.  For our high-fidelity prototype, we wanted to take a step back and reconsider some of the company’s goals. As a result, we came up with a prototype that incorporated many of the different sketches together: the navigation came from sketch 1, the calendars came from sketch 4, the filter/search layouts came from sketch 3, and the information grid layout came from sketch 2.",
	"Despite what we wanted to think, we knew that our protoytpe wasn't perfect. So, after engaging in a critique session, we made some improvements, namely allowing employees to message one another within the app, as well as modify the dates of a reservation. One large critique was on our limited flow of navigation, but the company's focus is to make the app as easy to learn and as error-prone as possible, so we felt that sticking with nonuniversal nvaigation was the right way to go.",
	"The next stage of the project was to analyze eye-tracking results to see if users were paying attention to the parts wanted them to focus on. To do this, we first drew up a hypothesis based on our experience with the interface, and set up an eye-tracker and got a participant to perform a task.",
	'"You are an employee at the Hotel CIT, and a customer (Jon Cho) has called in and wants to check some information. Use this interface to help answer Jon Cho\'s questions. Firstly, check Jon Cho\’s reservation and extend his stay, if possible.  Determine if Jon Cho has completed his contract so that he may participate in the Yoga class this morning. In addition, he\’d like to know how many other people signed up for the yoga class. Lastly, sign out."',
	"From these heatmaps, we were able to determine that the home page was the least confusing page, whereas the guest page was one of the most confusing. With this information, we knew that we should make changes to the less intuitive pages to make navigating those pages simpler and easier to use, but ultimately, most of the results turned out to be positive.",
	"This project was difficult, and certainly took a lot of time and teamwork. By the end of the project, though we were all done with hotels and canaries, I personally felt that I learned a significant amount regarding the importance of iterative design. More abstractly, I felt that I gained more insight into the importance of having multiple sets of eyes designing an interface. Though there were times of disagreement, having the privilege of bouncing ideas of one another turned the process into a much more enjoyable one."
]

class Iterative extends Component {
	constructor(props) {
		super(props)

		this.getDisplay = this.getDisplay.bind(this)
	}

	getDisplay() {
		if (this.props.parent.state.page.toLowerCase() === "canary technologies") {
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
					{this.renderInfo(0, 5)}
					<ContentBlock section="ONE:" content={<img className="project-sub-img" src={Sketch1} />} />
					<ContentBlock section="TWO:" content={<img className="project-sub-img" src={Sketch2} />} />
					<ContentBlock section="THREE:" content={<img className="project-sub-img" src={Sketch3} />} />
					<ContentBlock section="FOUR:" content={<img className="project-sub-img" src={Sketch4} />} />
					{this.renderInfo(5, 6)}
					<ContentBlock section="" content={
						<iframe style={{border: 'none', width: '70vw', height: '30vw'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Ff4bIRsOei5Z3gbAo67J8wK2D%2FIterative%3Fnode-id%3D2%253A0" allowfullscreen></iframe>} />
					{this.renderInfo(6, 9)}
					<ContentBlock section="HEATMAPS:" content={<img className="project-sub-img" src={HomeHeatmap} />} />
					<ContentBlock section="" content={<img className="project-sub-img" src={GuestHeatmap} />} />
					{this.renderInfo(9, 11)}
				</div>
			</div>
		);
	}
}


export default Iterative;