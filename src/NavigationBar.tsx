import React from 'react';
import './css/NavigationBar.css';
import Resume from './images/Yip.Stanley.2021.pdf'
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

export interface NavigationProps {
	setPage: (page: string, withFade: boolean) => any;
	goHome: () => any;
	currPage: string;
}

@observer
export default class NavigationBar extends React.Component<NavigationProps> {
	@observable private _selected: string = this.props.currPage;

	@action
	workClicked = () => {
		this.props.setPage("work", true)
		this._selected = "work";
	}

	@action
	aboutClicked = () => {
		this.props.setPage("about", true);
		this._selected = "about";
	}

	render() {
		return (
			<div id="navi-cont" style={{ display: this.props.currPage === "index" ? "none" : "flex" }}>
				<div id="navi-sub-cont">
					<div className="nav-element" onClick={this.props.goHome} id="name">Stanley Yip</div>
					<div id="horiz-line"></div>

					<div className="nav-element">
						<a onClick={this.workClicked} className="nav-link" id={this._selected === "work" ? "selected" : ""}>WORK</a>
					</div>

					<div className="nav-element">
						<a onClick={this.aboutClicked} className="nav-link" id={this._selected === "about" ? "selected" : ""}>ABOUT</a>
					</div>

					<div className="nav-element">
						<a href={Resume} target="blank" className="nav-link">RESUME</a>
					</div>
				</div>
			</div>
		);
	}
}