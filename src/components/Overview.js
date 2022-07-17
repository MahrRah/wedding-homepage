import React, { Component } from 'react';
import '../assets/css/main.css'

import Story from './Story.js'
class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            story: false
        }
        this.isStory = this.isStory.bind(this);
    }

    isStory() {
        this.setState({ story: this.story? false:true })

    }
    render() {
        return (
            <div id="main">
                <article className="post featured">
                    <header className="major">
                        <span className="date">{this.props.t("overview:date")}</span>
                        <h2>{this.props.t("overview:welcome")}</h2>
                        <p> {this.props.t("story:storyText")}</p>
                    </header>
                    <a href="#" className="image main"><img src="images/pic01.jpg" alt="" /></a>
                    <ul className="actions special">
                        <li><a className="button large" onClick={this.isStory}>{this.props.t("story:ourStory")}</a></li>
                    </ul>
                </article>
                {this.state.story &&
                    <Story t={this.props.t}  />}
            </div>
        );
    }
}

export default Overview;