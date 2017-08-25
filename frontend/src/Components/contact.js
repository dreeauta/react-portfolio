import React from 'react';
import ReactDom from 'react-dom';
import '../CSS/Contact.css';
import $ from 'jquery';

export default class Contact extends React.Component{
  constructor() {
    super();
    this.state={
      name: '',
      email: '',
      message: ''
    };
  }
  
  $.ajax({
  url: this.props.url,
  dataType: 'json',
  type: 'POST',
  data: comment,
  success: function(data) {
    this.setState({data: data});
  }.bind(this),
  error: function(xhr, status, err) {
    this.setState({data: comments});
    console.error(this.props.url, status, err.toString());
  }.bind(this)
});
  

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

            <button onClick={event => this.submitForm('') }> Submit </button>
          </form>
        </div>

        <div className="icons-container">
          <div className="icons">
          <a href="github.com">  <img src="img/github.png"/> GitHub </a>
          <a href="linkedin.com">  <img src="img/linkedin.png"/> LinkedIn </a>
          <a href="gmail.com>"> <img src="img/gmail.png"/> E-Mail  </a>
          {/* <a href="img/AndreeaUtaresume.pdf" target="_blank"> <img src="img/resumeicon.png"/> Resume </a>  */}
          </div>
        </div>

      </div>
    )
  }
}
