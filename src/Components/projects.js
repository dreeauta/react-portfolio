import React from 'react';
import '../CSS/projects.css';


export default class Projects extends React.Component{
  render() {
    return(
      <div className="projects-wrapper">
        <div className="project-container">
          <h2>TicTacToe </h2>
          <img src="img/tictactoe.png"/>
          <p> This application was the first application I built to learn jQuery.I learned about manipulating the Dom to render events on the page.</p>
          <p className="project-technologies"> <span>Technologies: </span> HTML, CSS, Javascript, jQuery </p>
          <div className="project-links">
            <a href="tictactoe.andreeauta.com"> Demo </a>
            <a href="https://github.com/dreeauta/tic_tac_toe-jquery"> Github </a>
          </div>
        </div>

        <div className="project-container">
          <h2>Blackjack </h2>
          <img src="img/blackjack.png"/>
          <p> Using Javascript and jQuery I built a cartoon themed BlackJack game. </p>
          <p className="project-technologies"> <span>Technologies: </span> 'Technologies: HTML, CSS, Javascript, jQuery </p>
          <div className="project-links">
            <a href="blackjack.andreeauta.com"> Demo </a>
            <a href="https://github.com/dreeauta/blackjack"> Github </a>
          </div>
        </div>

        <div className="project-container">
          <h2>Smarta </h2>
          <img src="img/smarta.png"/>
          <p> I helped build an application with a team of 4 to connect Marta and local Atlanta businesses together.
            Smarta links Yelp, Marta, and Google Maps together to easily search for businesses along your Marta route. </p>
          <p className="project-technologies"> <span>Technologies: </span> Express, Node.JS, BlueBird, HTML, CSS, Javascript </p>
          <div className="project-links">
            <a href="http://marta.andreeauta.com/"> Demo </a>
            <a href="https://github.com/dreeauta/Smarta"> Github </a>
          </div>
        </div>

        <div className="project-container">
          <h2>Blackjack </h2>
          <img src="img/drawingthings.png"/>
          <p> Using Socket.io and Javasript I built an application that allows you to collaborate with friends on beautiful pictures. </p>
          <p className="project-technologies"> <span>Technologies: </span> 'Technologies: HTML, CSS, Javascript, jQuery </p>
          <div className="project-links">
            <a href="http://drawing-things.andreeauta.com/"> Demo </a>
            <a href="https://github.com/dreeauta/DrawingThings-Project"> Github </a>
          </div>
        </div>
      </div>
    )
  }
}
