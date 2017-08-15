import React from 'react';
import '../App.css';

export default class Contact extends React.Component{
  render(){
    return(
      <div className="contact-container">
        <h2> Contact Me </h2>
        <p>  For any questions send me an e-mail at
          dreea.9965@gmail.com. </p>

        <ul className="icons">
          <li> GitHub</li>
          <li> LinkedIn</li>
          <li> E-Mail </li>
          <li> Instagram</li>
        </ul>
      </div>
    )
  }
}
