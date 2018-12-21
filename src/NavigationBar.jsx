import React, { Component } from 'react';
import './css/NavigationBar.css';
import Resume from './images/Yip.Stanley.2021.pdf'

class NavigationBar extends Component {
	constructor(props) {
		super(props)

		this.workClicked = this.workClicked.bind(this)
		this.aboutClicked = this.aboutClicked.bind(this)
		this.homeClicked = this.homeClicked.bind(this)
		this.getDisplay = this.getDisplay.bind(this)
	}

	workClicked() {
		if (this.props.parent.state.page !== "work") {
			this.props.parent.fadeTo("work")

			this.refs.work.id = "selected"
			this.refs.about.id = ""
		}
	}

	aboutClicked() {
		if (this.props.parent.state.page !== "about") {
			this.props.parent.fadeTo("about")
			this.refs.work.id = ""
			this.refs.about.id = "selected"
		}
	}

	homeClicked() {
		this.props.parent.moveToHome();
		setTimeout(() => {
			this.props.parent.setState({
				page: "index"
			})
			console.log("nice");
		}, 600)
	}

	getDisplay() {
		if (this.props.parent.state.page === "index") {
			return {display: "none"}
		}
		return {display: "flex"}
	}

	render() {
		return (
			<div id="navi-cont" style={this.getDisplay()}>
				<div id="navi-sub-cont">
					<div className="nav-element" onClick={this.homeClicked} id="name">Stanley Yip</div>
					<div id="horiz-line"></div>

					<div className="nav-element">
						<a onClick={this.workClicked} className="nav-link" ref="work">WORK</a>
					</div>

					<div className="nav-element">
						<a onClick={this.aboutClicked}  className="nav-link" ref="about">ABOUT</a>
					</div>

					<div className="nav-element">
						<a href={Resume} target="_blank" className="nav-link">RESUME</a>
					</div>
				</div>
			</div>
		);
	}
}


export default NavigationBar;