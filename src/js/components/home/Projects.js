import React from "react";
import ReactDOM from 'react-dom';

import Project from "./Project";

import ProjectStore from "../../stores/ProjectStore";

export default class Projects extends React.Component {
    constructor(){
        super();
        this.state = {
            projects: ProjectStore.getAll()
        };
    }

    render() {
        const projects = this.state.projects;
        const ProjectComponents = projects.map((project) => {
            return <Project key={project.id} {...project} />;
        });

        return (
        	<div id="projects" class="container">
                { ProjectComponents }
        	</div>
        );
    }
}