import React from "react";

import Nav from "../components/layout/Nav";

export default class ContactPage extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    // will only run once (good place to bind events)
    componentWillMount(){}

    render() {
        return (
        	<div id="contact">
                <Nav />

        		<h1>Contact</h1>

                <div class=""></div>
        	</div>
        );
    }
}