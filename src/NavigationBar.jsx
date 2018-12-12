import React, { Component } from 'react';
import './css/NavigationBar.css';

class NavigationBar extends Component {
	constructor(props) {
		super(props)

		this.workClicked = this.workClicked.bind(this)
		this.aboutClicked = this.aboutClicked.bind(this)
		this.homeClicked = this.homeClicked.bind(this)
		this.getDisplay = this.getDisplay.bind(this)
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

	homeClicked() {
		this.props.parent.setState({
			page: "index"
		})
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
						<a onClick={this.workClicked} className="nav-link" id="selected">WORK</a>
					</div>

					<div className="nav-element">
						<a onClick={this.aboutClicked}  className="nav-link">ABOUT</a>
					</div>

					<div className="nav-element">
						<a href="#" className="nav-link">RESUME</a>
					</div>
				</div>
			</div>
		);
	}
}


export default NavigationBar;