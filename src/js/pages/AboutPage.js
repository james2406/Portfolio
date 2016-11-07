import React from "react";

import About from "../components/about/About";

export default class AboutPage extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    // will only run once (good place to bind events)
    componentWillMount(){}

    render() {
        return (
        	<div id="about">
                <About />
        	</div>
        );
    }
}