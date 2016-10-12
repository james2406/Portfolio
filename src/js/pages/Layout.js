import React from "react";
import { Link } from 'react-router';

import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
    render() {
        return (
        	<div>
                <Nav />
        		{this.props.children}
        	</div>
        );
    }
}