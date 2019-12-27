import React, { Component } from 'react';
import './css/ProjectList.css';
import { Tex } from 'react-tex';
import ContentBlock from './ContentBlock';

export interface LatexBlockProps {
    section: string,
    equation: string
}

export default class LatexBlock extends Component<LatexBlockProps> {
    render() {
        return (
            <ContentBlock section={this.props.section} content={
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Tex texContent={this.props.equation} />
                </div>
            } />
        );
    }
}
