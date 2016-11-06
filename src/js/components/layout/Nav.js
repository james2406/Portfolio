import React from "react";
import { Link } from 'react-router';

export default class Nav extends React.Component {
    render() {
        return (
        	<nav class="navigation">
                <div class="container">
            		<div class="logo">
                        <Link to="home" activeClassName="active">
                            <p>JAMES MORAN</p>
                        </Link>
            		</div>
            		<div class="navigation_links">
            			<Link to="home" activeClassName="active">Work</Link>
            			<Link to="about" activeClassName="active">About</Link>
                        <Link to="contact" activeClassName="active">Contact</Link>
            		</div>
                </div>
        	</nav>
        );
    }
}