import React from "react";

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Projects from "../components/home/Projects";

export default class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        if(this.props.history.isActive('home/work')){
            scroll.scrollTo(document.documentElement.clientHeight);
        }

        return (
        	<div id="home">
                <About />
                <Projects />

                <div class="container">
                    <Contact />
                </div>
        	</div>
        );
    }
}