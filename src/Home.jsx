import React, { Component } from 'react';
import './css/Home.css';
import Me from './images/me.jpg'
import LinkedIn from './images/linkedin.png'
import Facebook from './images/facebook.png'
import Gmail from './images/gmail.png'
import Github from './images/github.png'
import Resume from './images/Yip.Stanley.2021.pdf'

const identities = ["a pianist", "a graphic designer", "a student", "a son", "a low-income student",
	"a musician", "a leader", "a grandson", "a self-proclaimed nerd", "a brother", "an optimist", "a firm believer in people",
	"a first-generation student"];

let index = 0;

class HomeApp extends Component {
	constructor(props) {
		super(props)

		this.getDisplay = this.getDisplay.bind(this)
		this.whatAmI = this.whatAmI.bind(this)
		this.workClicked = this.workClicked.bind(this)
		this.aboutClicked = this.aboutClicked.bind(this)

		this.state = ({
			whatAmI: identities[index]
		})
	}

	workClicked() {
		this.props.parent.moveFromHome()
		this.props.parent.setState({
			page: "work"
		})
		this.props.parent.refs.navi.refs.work.id = "selected"
		this.props.parent.refs.navi.refs.about.id = ""
	}

	aboutClicked() {
		this.props.parent.moveFromHome()
		this.props.parent.setState({
			page: "about"
		})
		this.props.parent.refs.navi.refs.about.id = "selected"
		this.props.parent.refs.navi.refs.work.id = ""
	}

	componentDidMount() {
		this.whatAmI()
	}

	getDisplay() {
		return {display: "grid"}
	}

	whatAmI() {
		if (index < identities.length - 1) {
			index++;
		}
		else {
			index = 0;
		}
		
		this.setState({
			whatAmI: identities[index]
		})
		setTimeout(this.whatAmI, 1000)
	}

	resumeClicked() {
		window.open(Resume, "_blank")
	}

	render() {
		return (
			<div id="home" style={this.getDisplay()}>
				<div className="avenir" id="hey-there">Hey there!</div>

				<div id="home-desc">
					My name is <b style={{color: "#FAA52D", fontWeight: 600}}>Stanley Yip</b>.
					<br />
					I'm a full stack developer that wants to make people's lives easier.
					<br />
					I'm also {this.state.whatAmI}.
				</div>

				<div className="avenir" id="home-learn">Learn more about me</div>

				<div id="home-links-cont">
					<div className="home-links" onClick={this.workClicked}>WORK</div>
					<div className="home-links" onClick={this.aboutClicked}>ABOUT</div>
					<div className="home-links" onClick={this.resumeClicked}>RESUME</div>
				</div>

				<div className="avenir" id="home-contact">Let's get in touch</div>

				<div id="home-contact-links-cont">
					<a href="https://www.linkedin.com/in/stanley-yip/" target="_blank"><img className="home-contact-link" src={LinkedIn} /></a>
					<a href="https://github.com/yipstanley" target="_blank"><img className="home-contact-link" src={Github} /></a>
					<a href="https://www.facebook.com/stanleyyip99" target="_blank"><img className="home-contact-link" src={Facebook} /></a>
					<a href="mailto:stanley_yip@brown.edu" target="_blank"><img className="home-contact-link" src={Gmail} /></a>
				</div>

				<img src={Me} id="me" />
			</div>
		);
	}
}


export default HomeApp;