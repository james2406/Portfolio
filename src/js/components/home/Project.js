import React from "react";
import { Link } from 'react-router';

export default class Project extends React.Component {
    constructor(){
        super();
        this.state = {
            active: "",
        };
    }

    render() {
        const id = this.props.id;
    	const title = this.props.title;
        const subtitle = this.props.subtitle;
        const imgUrl = this.props.imgUrl[0];
    	const skills = this.props.skills.map((skill) => {
            return <p key={skill.id}>{skill.skill}</p>;
        });

        // <Link to="" activeClassName="active">JAMES MORAN</Link>
        // <button class="btn_white">View project</button>

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
                    <div class="project_image" style={{background: 'url("' + imgUrl + '")'}}></div>
                </div>
            </div>
        );
    }
}