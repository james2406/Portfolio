import React from "react";
import { Link } from 'react-router';

export default class Nav extends React.Component {
    render() {
        return (
        	<nav class="navigation">
                <div class="container">
            		<div class="logo">
                        <Link to="" activeClassName="active">JAMES MORAN</Link>
            		</div>
            		<div class="navigation_links">
            			<Link to="work" activeClassName="active">Work</Link>
            			<Link to="about" activeClassName="active">About</Link>
                        <Link to="contact" activeClassName="active">Contact</Link>
            		</div>
                </div>
        	</nav>
        );
    }
}