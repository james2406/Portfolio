import React from "react";

// var Scroll = require('react-scroll');
// var scroll = Scroll.animateScroll;

import Contact from "../components/contact/Contact";
import Header from "../components/home/Header";
import Projects from "../components/home/Projects";

export default class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        // if(this.props.history.isActive('home/work')){
        //     scroll.scrollTo(document.documentElement.clientHeight);
        // }

        return (
        	<div id="home">
                <Header />
                <Projects />

                <div class="container">
                    <Contact />
                </div>
        	</div>
        );
    }
}