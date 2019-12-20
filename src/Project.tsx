import React from "react"
import ContentBlock from "./ContentBlock";

export interface ProjectProps {
	setPage: (page: string, withFade: boolean) => any;
	project: Project;
}

export default abstract class ProjectPage extends React.Component<ProjectProps> {
    abstract sections: string[]
    abstract descriptions: string[]

    renderInfo(start: number = 0, end: number = Infinity) {
		let items = [];
		for (let i = start; i < end && i < this.descriptions.length; i++) {
			items.push(<ContentBlock section={this.sections[i]} content={this.descriptions[i]} />)
		}
		return items;
	}
}