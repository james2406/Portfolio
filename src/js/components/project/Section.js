import React from "react";
import ReactDOM from 'react-dom';

export default class Section extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    render() {
    	const title = this.props.title;
    	const text = this.props.text.map((t, rank) => {
     		return <p key={rank}>{ t }</p>;
		});
		const imgUrl = this.props.imgUrl;

        return (
        	<div class="project_section">
                <div class="section_title">
                    <h5>{ title }</h5>
                </div>
        		<div class="section_text">
                    { text }
                </div>
        		<img class="section_image" src={ imgUrl }></img>
        	</div>
        );
    }
}