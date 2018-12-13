import React, { Component } from 'react';
import MozartBackground1 from './images/mozart-1.jpg'
import Signature from './images/signature.gif'
import NavigationBar from './NavigationBar.jsx'
import ProjectList from './ProjectList.jsx'
import HomeApp from './Home.jsx'
import DashApp from './Dash.jsx'
import RedesignApp from './Redesign.jsx'
import './css/App.css';
import Dash from './images/dash.PNG'
import Antonios from './images/antonios.PNG'
import CanaryTech from './images/canarytech.PNG'
import Watson from './images/watson.jpg'
import Shell from './images/shell.PNG'

const projects = [
	{name: "Dash", tech: "Research, C#, XAML, HCI, UIUX", purpose: "Research Project", img: Dash, linkTo: "dash.html",
		date: 999999, timeline: "April 2018 - Present", tools: "C#, XAML, UWP"},
	{name: "Antonio's Pizza Website Redesign", tech: "UIUX, HTML/CSS, JavaScript, Figma, Balsamiq", purpose: "School Project",
		img: Antonios, linkTo: "redesign.html", date: 201810, timeline: "October 2018", tools: "Figma, Balsamiq, HTML/CSS, JavaScript"},
	{name: "Canary Technologies", tech: "UIUX, Figma", img: CanaryTech, purpose: "School Project",
		linkTo: "iterative.html", date: 201811, timeline: "November 2018", tools: "Figma"},
	{name: "Design @ Watson Institute", tech: "Design, Adobe Illustrator, Adobe Photoshop", timeline: "November 2018",
		tools: "Adobe Illustrator, Adobe Photoshop", purpose: "Professional Project", img: Watson, linkTo: "watson.html", date: 201800},
	{name: "Shell", tech: "C", img: Shell, linkTo: "shell.html", purpose: "School Project", tools: "C",
		timeline: "October 2018", date: 201810},
]

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			backgroundTransform: 0,
			page: "antonio's pizza website redesign"
		}
	}

	getProjects() {
		return projects
	}

	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		let scrollTop = window.scrollY
		let totalHeight = window.scrollMaxY
		let bg = document.getElementById("background-image")
		let bgTotalWidth = bg.width - 1.7 * window.screen.width
		let scrollRatio = scrollTop / totalHeight
		bg.style.marginLeft = -(scrollRatio * bgTotalWidth) + "px"
	}

	render() {
		return (
			<div id="main-cont" ref="mainDiv">
				<img id="background-image" src={Signature} style={{marginLeft: this.state.backgroundTransform}} />
				<HomeApp parent={this} />
				<DashApp parent={this} project={projects[0]} />
				<RedesignApp parent={this} project={projects[1]} />
				<NavigationBar parent={this} />
				<ProjectList parent={this} />
			</div>
		);
	}
}


export default App;
