import React from "react";
import { Link } from 'react-router';

import ProjectStore from "../stores/ProjectStore";

export default class ProjectPage extends React.Component {
    constructor(){
        super();
        this.state = {
        	project: {}
        };
    }

    componentWillMount() {
    	var projectId = parseInt(this.props.params.projectId);
    	this.setState({ project: ProjectStore.getProject(projectId) });
  	}
  	componentWillReceiveProps(nextProps) {
  		var projectId = parseInt(nextProps.params.projectId);
  		this.setState({ project: ProjectStore.getProject(projectId) });
  	}

    render() {
    	const project = this.state.project;

    	const title = project.title;
        const text = project.text;
        const imgUrl = project.imgUrl;
    	const skills = project.skills.map((skill) => {
            return <p key={skill.id}>{skill.skill}</p>;
        });
        // const sections = sections.map((section) => {
        //     return <Section key={project.id} {...project} />;
        // });

        return (
        	<div id="project">
        		<div class="project_header">
	        		<h3 class="project_title">{ title }</h3>
	                <div class="project_skills">{ skills }</div>
	                <img class="project_image" src={imgUrl}></img>
        		</div>

        		<div class="project_section" class="container">
        			<h4>Subtitle</h4>
        			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod molestie leo, in placerat quam. Proin a scelerisque dui, vel tincidunt sapien. Donec quis consectetur leo, a vestibulum diam. Phasellus ligula quam, vestibulum eu sapien a, fringilla euismod ante</p>
        			<img src={imgUrl}></img>
        		</div>
        	</div>
        );
    }
}
