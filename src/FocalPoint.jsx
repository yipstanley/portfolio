import React, { Component } from 'react';
import ContentBlock from './ContentBlock.jsx'
import OldFocalPoint from './images/focal_point/old_focal_point.gif'
import Prototype from './images/focal_point/prototype.png'
import NewFocalPoint from './images/focal_point/new_focal_point.gif'

const sections = ["INTRO:", "CONTEXT:", "INTERVIEWS:", "PROTOTYPING:", "WEBSCRAPING:", "RESULT:", "CHALLENGES:", "NEXT STEPS:"]
const descriptions = [
	"In late January, I teamed up with a group of friends during Hack@Brown to work on a project that would benefit all of us. As many of us were sophomores, we were at the point in time where we started worrying about our concentrations, as declaration season was in just a few months.",
	"Focal Point is a website that students at Brown University use to help them decide what their concentration is. Though generally helpful, there are certainly numerous pitfalls that diminish the benefits of this website.",
	"As a first step towards fixing this UI problem, I and another member of my 5 person group went around the hackathon and asked other students about their opinions regarding Focal Point. We asked for the part of Focal Point that they felt we should keep, the part of Focal Point that they disliked the most, and what they felt would make them actually want to use Focal Point. During these interviews, I also let the interviewees play around with Focal Point on my laptop to refamiliarize themselves. After going around the venue and interviewing different Brown students, we compiled all these interviews into a table.",
	"Because we didn't particularly have all the time we wanted and were in a crunch for time, half of us decided to start drafting up a very basic prototype for the website. We didn't get too deep into the prototype, nor did we have the chance to go through the whole process of making a lo-fi and hi-fi prototype, so we ended up making something in between that helped us all have a good understanding of the general direction we wanted this site to look like.",
	"While I worked on prototyping, the other half of the group began working on webscraping all of the data we needed. Part of it was done using BeautifulSoup, but due to the lack of organizational structure on the old Focal Point site, a lot of it had to be done manually. This ended up being a large obstacle and took up a ton of time to manually create a spreadsheet of all the information we needed.",
	"We ended up creating and designing a web application that we were all very impressed with! Not only did we try to include all of the functionality we wanted from the get-go, but we also made it easier to sort concentrations by their groupings. On top of that, users could compare concentrations side by side. We added the ability for users to add and remove classes that they've enjoyed. This piece of functionality is perhaps my favorite, because the system then takes the courses entered and displays only the list of concentrations where you've inputted a class that fulfills a requirement, and in the order of the amount of classes you've inputted that fulfills a requirement.",
	"Throughout the 12 hours, our team faced a lot of challenges, but perhaps the hardest one to overcome was the fact that prior to this project, half of our team had had little to no experience with React, JavaScript, and even HTML/CSS. I was really the only person that really had applicable experience in all of these platforms, and I ended up spending a lot of time helping others get up to speed and organizing tasks between people. Ultimately, I learned more than I expected to at this hackathon, albeit about working with a team and teaching others in a short amount of time.",
	"We've all put this project on the shelf, but eventually, we do plan on coming back together and fixing some of the bugs left in the project and spiffing up the design a bit. When that happens, we hopefully plan on sharing this with our peers at Brown and use that feedback to iterate on this project and see how we could improve it. If that ever does happen, we might even propose this idea to Brown and see if they like it enough to implement it!"
]

class FocalPoint extends Component {
	constructor(props) {
		super(props)

		this.getDisplay = this.getDisplay.bind(this)
	}

	getDisplay() {
		if (this.props.parent.state.page.toLowerCase() === "focal point @ brown") {
			return { display: "flex" }
		}
		return { display: "none" }
	}

	renderInfo(start, end) {
		let items = [];
		for (let i = start; i < end && i < descriptions.length; i++) {
			items.push(<ContentBlock section={sections[i]} content={descriptions[i]} />)
		}
		return items;
	}

	makeTable() {
		return (<table className="table">
			<tr>
				<th className="table-heading">Pros</th>
				<th className="table-heading">Cons</th>
				<th className="table-heading">Ideal Changes</th>
			</tr>
			<tr>
				<td valign="top">
					<ul>
						<li>
							Great for people that don't have an idea for their concentration.
										</li>
						<li>
							Easy to see how many concentrations there are.
										</li>
						<li>
							Seeing concentrations in a grid is very helpful.
										</li>
						<li>
							Categorization is helpful, but hard to find.
										</li>
						<li>
							Links to department pages are helpful.
										</li>
					</ul>
				</td>
				<td valign="top">
					<ul>
						<li>
							Organization is poor.
										</li>
						<li>
							Doesn't give a lot of information about requirements.
										</li>
						<li>
							Lack of helpful grouping.
										</li>
						<li>
							Photos are very unhelpful and makes the page cluttered.
										</li>
						<li>
							Too information dense.
										</li>
					</ul>
				</td>
				<td valign="top">
					<ul>
						<li>
							Add more concentration requirements.
										</li>
						<li>
							Allow for comparing concentrations.
										</li>
						<li>
							Change how concentrations are depicted.
										</li>
						<li>
							Functionality for a personalized list of concentrations.
										</li>
						<li>
							Declutter the page.
										</li>
					</ul>
				</td>
			</tr>
		</table>)
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
					{this.renderInfo(0, 2)}
					<ContentBlock section="" content={<img src={OldFocalPoint} className="project-sub-img" />} />
					<ContentBlock section="" content={<div>Click <a href="https://www.brown.edu/academics/college/concentrations/" target="_blank">HERE</a> to check out the full original website!</div>} />
					{this.renderInfo(2, 3)}
					<ContentBlock section="" content={this.makeTable()} />
					{this.renderInfo(3, 4)}
					<ContentBlock section="" content={<img src={Prototype} className="project-sub-img" />} />
					{this.renderInfo(4, 5)}
					<ContentBlock section="" content={<iframe width={window.screen.width * .7} height={window.screen.width * .7 * .55} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTlK5Z2C8hH2nyqIA1W59MX8cHe0wbCnUGDw5eXYW5HARaCWbDKIgFOgpP5kKzDSFjM21zwcu9F-mXs/pubhtml?widget=true&amp;headers=false"></iframe>} />
					{this.renderInfo(5, 6)}
					<ContentBlock section="" content={<img src={NewFocalPoint} className="project-sub-img" />} />
					<ContentBlock section="" content={<div>Go to <a href="http://stanleyyip.com/hab_2019/" target="_blank">the full site</a> for a better experience, or see the <a href="https://github.com/yipstanley/hab2019" target="_blank">raw code</a>!</div>} />
					{this.renderInfo(6, 8)}
				</div>
			</div>
		);
	}
}


export default FocalPoint;