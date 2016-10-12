import React from "react";

import { hashHistory } from 'react-router'

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

export default class Project extends React.Component {
    constructor(){
        super();
        this.state = {
            active: "",
        };
    }
    returnPos(el){
        const elPos = el.getBoundingClientRect().top;
        const pageYOffset = window.pageYOffset;
        return (elPos + pageYOffset);
    }
    scrollTo(el){
        scroll.scrollTo(
            this.returnPos(el)
        );
    }
    handleClick(){
        this.setState({active: "active"});
        this.scrollTo(document.getElementById('projects'));
        setTimeout(() => {
            // hashHistory.push('/project');
        }, 1000); 
    }

    render() {
        const id = this.props.id;
    	const title = this.props.title;
        const text = this.props.text;
        const imgUrl = this.props.imgUrl;
    	const skills = this.props.skills.map((skill) => {
            return <p key={skill.id}>{skill.skill}</p>;
        });

        return (
        	<div class={"project " + this.state.active}>
                <div class="project_left container">
                    <h2 class="project_title">{ title }</h2>
                    <div class="project_skills">{ skills }</div>
                    <img class="project_image" src={imgUrl}></img>
                    <p class="project_text">{ text }</p>
                    <button class="btn_white">View project</button>
                </div>
                <div class="project_right">
                    <div class="project_image" style={{background: 'url("' + imgUrl + '") left top / cover'}}></div>
                </div>
        	</div>
        );
    }
}