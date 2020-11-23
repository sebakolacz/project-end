import React, { Component } from 'react';
import arrow from '../Assets/arrow.svg';
import { db } from "../firebase";
 
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    db.collection("newsletter").add({ email: this.state.value });
    this.setState({
      value: ''
    });
  }


  render() {
    return (
      <footer className="contact">

        <div className="contact__information">
            <h1>Kasprowy</h1>
            <h2>RESORT & SPA</h2>
            <h3>Legionowska 24d, 34-400 Zakopane, Polska</h3>
            <h4>tel.: +48 38 58 38 400</h4>
        </div>

        <div className="contact__newsletter">
            <h1>Newsletter:</h1> 
              <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Podaj adres e-mail" value={this.state.value} onChange={this.handleChange} />
                <button><img src={arrow} type="submit" value="Wyślij" /></button>
            </form>
        </div>

    </footer>
    );
  }
}


export default Contact;