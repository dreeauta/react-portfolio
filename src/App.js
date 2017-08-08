import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/skills" component={Skills}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Skills = () => (
  <div>
    <h2>Skills</h2>
    <ul>
      <li> JavaScript</li>
      <li>Node.JS</li>
      <li>React</li>
      <li>Redux</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </div>
)


const Projects = ({ match }) => (
  <div>
    <h2>Projects</h2>
    <ul>
      <li>
        <Link to={`${match.url}/tictactoe`}>
          Tic Tac Toe
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Smarta
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Drawing Things
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:projectId`} component={Projects}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a project.</h3>
    )}/>
  </div>
)

const Project = ({ match }) => (
  <div>
    <h3>{match.params.projectId}</h3>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <p> Hi! My name is Andreea Uta, and I'm a Front End Developer. I built this portfolio
    with React, HTML, and CSS. I'm an artist, and passionate about graphic design. </p>
  </div>
)

export default BasicExample;
