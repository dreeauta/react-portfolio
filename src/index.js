import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/app';
import Home from './Components/home';
import About from './Components/about';
import Contact from './Components/contact';
import Projects from './Components/projects';


import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <IndexRoute component= {Home}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    </Route>
  </Router>,
  document.getElementById('root'));
