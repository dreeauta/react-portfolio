import React from 'react';
import ReactDom from 'react-dom';
import '../CSS/Contact.css';

export default class Contact extends React.Component{
  constructor() {
    super();
    this.state={
      name: '',
      email: '',
      message: ''
    };
  }
  
changeState(stateName, event) {
  let textInput = event.target;
  this.setState({
    [stateName]: textInput.value
  });
}
  
submitForm(event) {
  event.preventDefault();
  let contact = {
    name: this.state.name,
    email: this.state.email,
    message: this.state.message
  };
  
  this.setState({
    name: '',
    email: '',
    message: ''
  });
}
  
  render(){
    return(
      <div className="contact-container">
        <div className="contact-text">
          <h2> Contact Me </h2>
          <form onSubmit={event => this.submitForm(event)}>
            <h5> Name </h5>
            <input label="name" value = {this.state.name} onChange={event => 
            this.changeState('name', event)}/>
            
            <h5> Email </h5> 
            <input label="email" value = {this.state.email} onChange={event =>
            this.changeState('email', event)}/>
            
            <h5> Message </h5>
            <textarea label="message" value= {this.state.message} onChange={event =>
            this.changeState('message', event)}/>
          
            <button> Submit </button>
          </form>
        </div>
        
        <div className="icons-container">
          <div className="icons">
          <a href="github.com">  <img src="img/github.png"/> GitHub </a>
          <a href="linkedin.com">  <img src="img/linkedin.png"/> LinkedIn </a>
          <a href="gmail.com>"> <img src="img/gmail.png"/> E-Mail  </a>
          <a href="resume"> Resume </a>
          </div>
        </div>
        
      </div>
    )
  }
}
