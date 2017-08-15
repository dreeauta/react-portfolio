import React from 'react';
import ReactDom from 'react-dom';
import '../App.css';

export default class Home extends React.Component{

  render() {
    return (
      <div className="home-wrapper">
        <div>
          <h2 className="home-title"> Hi! My name is Andreea Uta, and I'm a full stack developer.</h2>
          <p className="home-subtitle"> This site was developed with HTML, CSS, and React. </p>
        </div>
      </div>
    )
  }
}
