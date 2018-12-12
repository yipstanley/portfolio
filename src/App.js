import React, { Component } from 'react';
import MozartBackground1 from './images/mozart-1.jpg'
import Signature from './images/signature.gif'
import NavigationBar from './NavigationBar.jsx'
import ProjectList from './ProjectList.jsx'
import HomeApp from './Home.jsx'
import './css/App.css';

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			backgroundTransform: 0,
			page: "index"
		}
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
				<NavigationBar parent={this} />
				<ProjectList page={this.state.page} />
			</div>
		);
	}
}


export default App;
