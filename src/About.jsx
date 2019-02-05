import React, { Component } from 'react';
import './css/About.css';
import Me from './images/me2.JPG'
import LinkedIn from './images/linkedin.png'
import Facebook from './images/facebook.png'
import Gmail from './images/gmail.png'
import Github from './images/github.png'

class AboutMe extends Component {
	constructor(props) {
		super(props)

		this.getDisplay = this.getDisplay.bind(this)
	}

	getDisplay() {
		if (this.props.parent.state.page === "about") {
			return {display: "grid"}
		}
		return {display: "none"}
	}

	render() {
		return (
			<div id="about-cont" style={this.getDisplay()}>
				<div id="meta-cont" style={{gridColumn: '1/3'}}>
					<div id="title">
						About Me
					</div>
				</div>

				<div id="about-content">
					My name is <b style={{color: '#FAA52D'}}>Stanley Yip</b>.
						<br />
						<br />
					I'm a Mathematics and Computer Science student at Brown University, focusing in visual computing and design.
						<br />
						<br />
					My passions include music, education, and politics.
						<br />
						<br />
					<b>I aspire to positively change the lives of everyone I meet</b>; even the most seemingly insignificant acts can make an enormous difference in someone's day.
						<br />
						<br />
					Thanks for visiting! Let's connect.
					<div id="about-contact-links-cont">
						<a href="https://www.linkedin.com/in/stanley-yip/" target="_blank"><img className="home-contact-link" src={LinkedIn} /></a>
						<a href="https://github.com/yipstanley" target="_blank"><img className="home-contact-link" src={Github} /></a>
						<a href="https://www.facebook.com/stanleyyip99" target="_blank"><img className="home-contact-link" src={Facebook} /></a>
						<a href="mailto:stanley_yip@brown.edu" target="_blank"><img className="home-contact-link" src={Gmail} /></a>
					</div>
				</div>

				<img src={Me} id="about-me" />
			</div>
		);
	}
}


export default AboutMe;