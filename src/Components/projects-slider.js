import React from 'react';
import '../projects.css';

var projects = [
  {
    id: '1',
    title: 'TicTacToe',
    image: './img/tictactoe.png',
    description: "This application was the first application I built to learn jQuery.I learned about manipulating the Dom to render events on the page.",
    technologies: 'Technologies: HTML, CSS, Javascript, jQuery',
    projectLink: 'tictactoe.andreeauta.com',
    githubLink: 'https://github.com/dreeauta/tic_tac_toe-jquery',
  },
  {
    id: '2',
    title: 'Blackjack',
    image: './img/tictactoe.png',
    description: 'Using Javascript and jQuery I built a cartoon themed BlackJack game.',
    technologies: 'Technologies: HTML, CSS, Javascript, jQuery',
    projectLink: 'blacjack.andreeauta.com',
    githubLink: 'https://github.com/dreeauta/blackjack',
  },
  {
    id: '3',
    title: 'Smarta',
    image: './img/tictactoe.png',
    description: 'I helped build an application with a team of 4 to connect Marta and local Atlanta businesses together. Smarta links Yelp, Marta, and Google Maps together to easily search for businesses along your Marta route.',
    technologies: 'Technologies: Express, Node.JS, BlueBird, HTML, CSS, Javascript',
    projectLink: 'http://marta.andreeauta.com/',
    githubLink: 'https://github.com/dreeauta/Smarta',
  },
  {
    id: '4',
    title: 'Drawing Things',
    image: './img/tictactoe.png',
    description: 'Using Socket.io and Javasript I built an application that allows you to collaborate with friends on beautiful pictures.',
    technologies: 'Technologies:  HTML, CSS, JS, Socket.IO ',
    projectLink: 'http://drawing-things.andreeauta.com/',
    githubLink: 'https://github.com/dreeauta/DrawingThings-Project',
  },
]


export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 0,
      projects: projects
    };
  }

  next() {
    let slide = this.state.currentSlide + 1;
    if (slide >= projects.length) {
      slide =0;
    }
    this.setState({
      currentSlide: slide
    });
  }

previous() {
  let slide = this.state.currentSlide - 1;
  if (slide < 0){
    slide = projects.length - 1;
  }
  this.setState({
    currentSlide: slide
  })
}

changeProject(slide) {
  this.setState({
    currentSlide: slide
  })
}



  render() {
    let slide = this.state.currentSlide;
    /*let currentProject = this.props.projects[slide]; */

    return (
      <div>
      <div className="Projects-Wrapper">

            {projects.map((project,idx) =>
            <div className="project"> onClick={() => this.changeProject(idx)} key={idx} </div>)}

        </div>

    </div>

    );
  }
}
