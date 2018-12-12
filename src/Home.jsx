import React, { Component } from 'react';
import './css/Home.css';
import Me from './images/me.jpg'
import LinkedIn from './images/linkedin.png'
import Facebook from './images/facebook.png'
import Gmail from './images/gmail.png'

const identities = ["a programmer", "a pianist", "a graphic designer", "a student", "a son", "a low-income student",
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
		this.props.parent.setState({
			page: "work"
		})
	}

	aboutClicked() {
		this.props.parent.setState({
			page: "about"
		})
	}

	componentDidMount() {
		this.whatAmI()
	}

	getDisplay() {
		if (this.props.parent.state.page === "index") {
			return {display: "grid"}
		}
		return {display: "none"}
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

	render() {
		return (
			<div id="home" style={this.getDisplay()}>
				<div className="avenir" id="hey-there">Hey there!</div>

				<div id="home-desc">
					My name is <u style={{color: "#FAA52D"}}><b>Stanley Yip</b></u>. I live in Providence, Rhode Island, but I was raised in Las Vegas, Nevada.
					<br />
					Currently, I am a first-year student at Brown University most likely studying Mathematics and Computer Science.
					<br />
					I am {this.state.whatAmI}.
				</div>

				<div className="avenir" id="home-learn">Learn more about me</div>

				<div id="home-links-cont">
					<div className="home-links" onClick={this.workClicked}>WORK</div>
					<div className="home-links" onClick={this.aboutClicked}>ABOUT</div>
					<div className="home-links">RESUME</div>
				</div>

				<div className="avenir" id="home-contact">Let's get in touch</div>

				<div id="home-contact-links-cont">
					<img className="home-contact-link" src={LinkedIn} />
					<img className="home-contact-link" src={Facebook} />
					<img className="home-contact-link" src={Gmail} />
				</div>

				<img src={Me} id="me" />
			</div>
		);
	}
}


export default HomeApp;