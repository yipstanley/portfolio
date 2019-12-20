import React, { Component } from 'react';
import './css/ProjectList.css';
import { Tex } from 'react-tex';
import ContentBlock from './ContentBlock';

class LatexBlock extends Component {
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


export default LatexBlock;