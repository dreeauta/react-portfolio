import React from 'react';
import '../CSS/About.css';

export default class About extends React.Component{
  render() {
    return(
      <div className="about-wrapper">

        <div className="about-text-container">
        <p className="about-text">
          <img src="img/about-me.jpg"/>
          <br/>
        I am a full-stack developer in the making
        at Digital Crafts. I build and design
        applications using HTML, CSS, and JavaScript.
        I'm passionate about graphic design.
        I also love to explore hiking trails with my dogs.
        </p>
      </div>

      <div className="skills-container">
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li> CSS </li>
            <li>SASS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>PostGreSQL</li>
            <li>Express</li>
            <li>Photoshop</li>
          </ul>
        </div>
      </div>
    </div>
    )
  }
}
