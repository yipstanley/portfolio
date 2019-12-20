import React, { Component } from 'react';
import './css/About.css';
import Me from './images/me2.jpg'
import LinkedIn from './images/linkedin.png'
import Facebook from './images/facebook.png'
import Gmail from './images/gmail.png'
import Github from './images/github.png'

export default class AboutMe extends Component {
	render() {
		return (
			<div id="about-cont">
				<div id="meta-cont" style={{gridColumn: '1/3'}}>
					<div className="title">
						About Me
					</div>
				</div>

				<div id="about-content">
					My name is <b style={{color: '#FAA52D'}}>Stanley Yip</b>.
						<br />
						<br />
					I'm a student at Brown University studying Computer Science and Music.
						<br />
						<br />
					My passions include music, education, and ethics.
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
