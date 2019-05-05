import React, { Component} from 'react';
import './ContactIronMan.css';

class ContactIronMan extends Component {
  constructor(){
    super();
  }
  render(){
    return (
      <section className="contact-ironman" id="contact-ironman">
        <div className="contact-form-container">
            <h1 className="contact-title">Contact</h1>
            <h1 className="contact-title">IRON MAN</h1>
            <form className="contact-form">
                <div className="text-field">
                    <input type="text" placeholder="First Name" name="firstName" required/>
                </div>
                <div className="text-field">
                    <input type="text" placeholder="Last Name" name="lastName" required/>
                </div>
                <div className="text-field">
                    <input type="email" placeholder="Sample@domain.com" name="email" required/>
                </div>
                <div className="text-area">
                    <textarea placeholder="Your Message"></textarea>
                </div>
                <div className="text-field">
                    <button className="btn">Contact</button>
                </div>
            </form>
        </div>
      </section>
    );
  }
}

export default ContactIronMan;