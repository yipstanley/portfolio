import React from "react";
import ProjectPage from "./Project";
import ContentBlock from "./ContentBlock";

export default class Bach extends ProjectPage {
    sections = [];
    descriptions = [];

    render() {
        return (
			<div id="project-cont">
				<div id="meta-cont">
					<div className="title">
						{this.props.project.name}
					</div>
					<div id="purpose">
						{this.props.project.purpose}
					</div>
					<div id="timeline">
						{this.props.project.timeline}
					</div>
					<div id="tools">
						Tools used: {this.props.project.tools}
					</div>
				</div>
				<div id="info-cont">
					{/* {this.renderInfo(0, 1)} */}
					{/* <ContentBlock section="" content={<img className="project-sub-img" src={OldInterface} />} /> */}
				</div>
			</div>
        )
    }
}