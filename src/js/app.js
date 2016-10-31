import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import '../stylesheets/main.scss';

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ProjectPage from "./pages/ProjectPage";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
    	<Route path="/" component={ Layout }>
      		<IndexRoute component={ HomePage }></IndexRoute>
      		<Route path="home" component={ HomePage }></Route>
      		<Route path="project" component={ ProjectPage }></Route>
      		<Route path="about" component={ AboutPage }></Route>
      		<Route path="contact" component={ ContactPage }></Route>
      		<Route path="project/:projectId" component={ ProjectPage }></Route>
    	</Route>
  	</Router>,
app);