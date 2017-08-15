import React, {Component} from 'react';
import '../CSS/App.css';

import {Link, IndexLink } from 'react-router';


export default class App extends Component {
  render(){
    return (
      <div className="wrapper">

        <div className="navBar">

            <IndexLink to="/" activeClassName="active"> Home </IndexLink>
            <Link to="/projects" activeClassName="active"> Projects </Link>
            <Link to="/about" activeClassName="active"> About </Link>
            <Link to="/contact" activeClassName="active"> Contact </Link>

         </div>

        <div className="pageContainer">
          {this.props.children}
        </div>

      </div>
    )
  }
}
