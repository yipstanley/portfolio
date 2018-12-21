import React, { Component } from 'react';
import MozartBackground1 from './images/mozart-1.jpg'
import Signature from './images/fam.jpg'
import NavigationBar from './NavigationBar.jsx'
import ProjectList from './ProjectList.jsx'
import HomeApp from './Home.jsx'
import DashApp from './Dash.jsx'
import DashTextSelectApp from './Dash-TextSelect.jsx'
import DashDatabaseApp from './Dash-Database.jsx'
import DashTravelogueApp from './Dash-Travelogue.jsx'
import RedesignApp from './Redesign.jsx'
import IterativeApp from './Iterative.jsx'
import AboutApp from './About.jsx'
import WatsonApp from './Watson.jsx'
import './css/App.css';
import Dash from './images/dash.PNG'
import Antonios from './images/antonios.PNG'
import CanaryTech from './images/canarytech.PNG'
import Watson from './images/watson.jpg'
import Shell from './images/shell.PNG'
import TextSelectImage from './images/textSelect.PNG'
import DatabaseImage from './images/database.PNG'
import TravelogueImage from './images/travelogue.PNG'

const projects = [
	{name: "Dash", tech: "Research, C#, XAML, HCI, UIUX", purpose: "Research Project", img: Dash, linkTo: "dash.html",
		date: 999999, timeline: "April 2018 - Present", tools: "C#, XAML, UWP"},
	{name: "Antonio's Pizza Website Redesign", tech: "UIUX, HTML/CSS, JavaScript, Figma, Balsamiq", purpose: "School Project",
		img: Antonios, linkTo: "redesign.html", date: 201810, timeline: "October 2018", tools: "Figma, Balsamiq, HTML/CSS, JavaScript"},
	{name: "Canary Technologies", tech: "UIUX, Figma", img: CanaryTech, purpose: "School Project",
		linkTo: "iterative.html", date: 201811, timeline: "November 2018", tools: "Figma"},
	{name: "Design @ Watson Institute", tech: "Design, Adobe Illustrator, Adobe Photoshop", timeline: "September 2017 - June 2018",
		tools: "Adobe Illustrator, Adobe Photoshop", purpose: "Professional Project", img: Watson, linkTo: "watson.html", date: 201800},
]

const dashProjects = [
	{name: "PDF Text Selection", date: 201810, img: TextSelectImage, timeline: "August 2018 - September 2018",
		tech: "Determining the best order of selecting text on a PDF", purpose: "Research Project"},
	{name: "PDF Database", date: 201811, img: DatabaseImage, timeline: "October 2018",
		tech: "Optimizing PDF loading through a database and caching layer", purpose: "Research Project"},
	{name: "Event Travelogue", date: 201811, img: TravelogueImage,
		tech: "Recording important actions and putting them in a travelogue", timeline: "November 2018 - Present", purpose: "Research Project"}
]

const heyThere = "Hey there!"
const loading = "Getting things ready"
var i = 0;
var homeMover = 100;

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			page: "index"
		}

		this.animateStart = this.animateStart.bind(this)
		this.animateLoading = this.animateLoading.bind(this)
		this.removeCover = this.removeCover.bind(this)
		this.fadeTo = this.fadeTo.bind(this)
		this.fadeOut = this.fadeOut.bind(this)
		this.fadeIn = this.fadeIn.bind(this)
		this.moveToHome = this.moveToHome.bind(this)
		this.moveFromHome = this.moveFromHome.bind(this)
	}

	getProjects() {
		return projects
	}

	animateStart() {
		if (i < heyThere.length) {
			let char = heyThere.charAt(i)
			let speed = 100;
			if (heyThere[i] == " ") {
				speed = 300;
			}
			this.refs.coverHey.innerHTML += char
			i++;
			setTimeout(this.animateStart, speed)
		}
		else {
			i = 0;
			setTimeout(this.animateLoading, 500)
		}
	}

	animateLoading() {
		if (i < 25) {
			console.log(i)
			if (i < loading.length) {
				let char = loading.charAt(i)
				let speed = 100;
				this.refs.loading.innerHTML += char
				i++;
				setTimeout(this.animateLoading, speed)
			}
			else {
				let content = loading
				let val = (i - loading.length) % 4
				i++
				if (val == 0) {
					content += ""
				}
				else if (val == 1) {
					content += "."
				}
				else if (val == 2) {
					content += ".."
				}
				else if (val == 3) {
					content += "..."
				}
				this.refs.loading.innerHTML = content
				setTimeout(this.animateLoading, 200)
			}
		}
		else {
			this.refs.loading.innerHTML = ""
			i = 1;
			this.removeCover()
		}
	}

	removeCover() {
		if (i >= 0) {
			this.refs.coverPane.style.opacity = i;
			i -= 0.1;
			setTimeout(this.removeCover, 30)
		}
		else {
			this.refs.coverPane.style.display = "none"
		}
	}

	fadeOut() {
		if (i >= 0) {
			i -= 0.05
			this.refs.appCont.style.opacity = i
			setTimeout(this.fadeOut, 10)
		}
	}

	fadeIn() {
		if (i <= 1) {
			i += 0.05
			this.refs.appCont.style.opacity = i;
			setTimeout(this.fadeIn, 10)
		}
	}

	fadeTo(to) {
		i = 1;
		this.fadeOut()

		setTimeout(() => {
			this.setState({
				page: to
			})
			this.fadeIn()
		}, 600)
	}

	moveToHome() {
		if (homeMover <= 100) {
			let fixer = (-(homeMover*homeMover) + 100 * homeMover + 100) / 2000
			this.refs.mainDiv.style.paddingLeft = homeMover + "vw"
			homeMover += 3 * fixer;
			setTimeout(this.moveToHome, 0.1)
		}
	}

	moveFromHome() {
		if (homeMover >= 0) {
			let fixer = (-(homeMover*homeMover) + 100 * homeMover + 100) / 2000
			this.refs.mainDiv.style.paddingLeft = homeMover + "vw"
			homeMover -= 3 * fixer;
			setTimeout(this.moveFromHome, 0.1)
		}
	}

	componentDidMount() {
    	this.animateStart()
	}

	getDisplay() {
		if (this.state.page === "index") {
			return {display: "initial"}
		}
		return {display: "none"}
	}

	render() {
		window.scrollTo({
			top: 0,
			left: 0,
			//behavior: 'smooth'
		})
		return (
			<div id="main-cont" ref="mainDiv">
				<div id="cover-pane" ref="coverPane">
					<div id="cover-hey-there" ref="coverHey">
					</div>
					<div id="loading" ref="loading">
					</div>
				</div>
				<img id="background-image" src={Signature} style={this.getDisplay()} />
				<HomeApp parent={this} />
				<div id="app-cont" ref="appCont">
					<DashApp parent={this} project={projects[0]} projects={dashProjects} />
					<AboutApp parent={this} />
					<RedesignApp parent={this} project={projects[1]} />
					<IterativeApp parent={this} project={projects[2]} />
					<WatsonApp parent={this} project={projects[3]} />

					<DashTextSelectApp parent={this} project={dashProjects[0]} />
					<DashDatabaseApp parent={this} project={dashProjects[1]} />
					<DashTravelogueApp parent={this} project={dashProjects[2]} />
					<ProjectList parent={this} />
				</div>
				<NavigationBar parent={this} ref="navi" />
			</div>
		);
	}
}


export default App;
