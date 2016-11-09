import React from "react";

export default class AboutPage extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    // will only run once (good place to bind events)
    componentWillMount(){}

    render() {
        return (
        	<div id="about" class="container">
                <h1>About</h1>
                <div class=""></div>
        	</div>
        );
    }
}