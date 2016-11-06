import React from "react";
import { Link } from 'react-router';

import Nav from "../components/layout/Nav";
import ProjectStore from "../stores/ProjectStore";
import Section from "../components/project/Section";

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

        const images = project.imgUrl.map((imgUrl, rank) => {
            return <img key={rank} class="project_image" src={ imgUrl }></img>;
        });
    	const skills = project.skills.map((skill, rank) => {
            return <p key={rank}>{skill.skill}</p>;
        });
        const Sections = project.sections.map((section, rank) => {
            return <Section key={rank} {...section} />;
        });

        return (
        	<div id="project">
                <Nav />

        		<div class="project_header">
                    <div class="container">
    	        		<h3 class="project_title">{ title }</h3>
    	                <div class="project_skills">{ skills }</div>
                        <div class="project_images">{ images }</div>
                    </div>
        		</div>

        		<div id="project_sections" class="container">
                    <div class="project_section">
                        <div class="section_text">
                            <p>{ project.text }</p>
                        </div>
                    </div>

                    { Sections }
        		</div>
        	</div>
        );
    }
}
