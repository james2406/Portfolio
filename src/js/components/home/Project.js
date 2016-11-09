import React from "react";
import { Link } from 'react-router';

export default class Project extends React.Component {
    constructor(){
        super();
        this.state = {
            active: "",
            mouseX: 0,
        };
    }

    render() {
        const id = this.props.id;
    	const title = this.props.title;
        const subtitle = this.props.subtitle;
        const imgUrl = this.props.imgUrl;
    	const skills = this.props.skills.map((skill) => {
            return <p key={skill.id}>{skill.skill}</p>;
        });

        // function map_range(value, low1, high1, low2, high2) {
        //     return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
        // }
        // onmousemove = event => { 
        //     this.setState({mouseX: map_range(event.clientX, 0, document.body.clientWidth, 0, 100)});
        // }

        return (
            <div class={"project " + this.state.active}>

                <div class="project_border">
                    <div class="project_info">
                        <div class="project_text">
                            <h2>{ title }</h2>
                            <h6>{ subtitle }</h6>
                        </div>

                        <Link to={"project/" + id} activeClassName="active">View project</Link>
                    </div>
                </div>

                <div class="project_right">
                    <div class="project_image" style={{background: 'url("' + imgUrl + '")', backgroundPosition: this.state.mouseX + '% top'}}></div>
                </div>
            </div>
        );
    }
}