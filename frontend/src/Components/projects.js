import React from 'react';
import '../CSS/projects.css';


export default class Projects extends React.Component{
  render() {
    return(
      <div className="projects-wrapper">
        <div className="project-container">
          <h2>Handcrafted </h2>
          <img src="img/handcrafted.png"/>
          <p> I built an eccomerce site featuring local artists and art events in Atlanta. I learned how to use Redux. </p>
          <p className="project-technologies"> <span>Technologies: </span> React, Redux, CSS, Javascript, PostgreSQL </p>
          <div className="project-links">
            <a href="http://www.handcraftedatl.com" target="_blank" > Demo </a>
            <a href="https://github.com/dreeauta/Handcrafted-ATL" target="_blank" > Github </a>
          </div>
        </div>

        <div className="project-container">
          <h2>Blackjack </h2>
          <img src="img/blackjack.png"/>
          <p> Using Javascript and jQuery I built a cartoon themed BlackJack game. </p>
          <p className="project-technologies"> <span>Technologies: </span> HTML, CSS, Javascript, jQuery </p>
          <div className="project-links">
            <a href="blackjack.andreeauta.com" target="_blank" > Demo </a>
            <a href="https://github.com/dreeauta/blackjack" target="_blank" > Github </a>
          </div>
        </div>

        <div className="project-container">
          <h2>Smarta </h2>
          <img src="img/smarta.png"/>
          <p> I helped build an application with a team of 4 to connect Marta and local Atlanta businesses together.
            Smarta links Yelp, Marta, and Google Maps together to easily search for businesses along your Marta route. </p>
          <p className="project-technologies"> <span>Technologies: </span> Express, Node.JS, BlueBird, HTML, CSS, Javascript </p>
          <div className="project-links">
            <a href="http://marta.andreeauta.com/" target="_blank" > Demo </a>
            <a href="https://github.com/dreeauta/Smarta" target="_blank" > Github </a>
          </div>
        </div>

        <div className="project-container">
          <h2>Blackjack </h2>
          <img src="img/drawingthings.png"/>
          <p> Using Socket.io and Javasript I built an application that allows you to collaborate with friends on beautiful pictures. </p>
          <p className="project-technologies"> <span>Technologies: </span> HTML, CSS, Javascript, jQuery </p>
          <div className="project-links">
            <a href="http://drawing-things.andreeauta.com/" target="_blank"> Demo </a>
            <a href="https://github.com/dreeauta/DrawingThings-Project" target="_blank"> Github </a>
          </div>
        </div>
      </div>
    )
  }
}
