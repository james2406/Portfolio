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

    render() {
    	const project = this.state.project;

        return (
        	<p class="">{ project.title }</p>
        );
    }
}
