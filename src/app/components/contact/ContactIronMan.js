import React, { Component} from 'react';
import './ContactIronMan.css';

class ContactIronMan extends Component {
  constructor(){
    super();
  }
  render(){
    return (
      <section className="contact-ironman">
        <div className="contact-form-container">
            <h1 className="contact-title">Contact IRON MAN</h1>
            <form className="contact-form">
                <div className="text-field">
                    <input type="text" firstName="firstName" required/>
                </div>
                <div className="text-field">
                    <input type="text" firstName="lastName" required/>
                </div>
                <div className="text-field">
                    <input type="email" firstName="email" required/>
                </div>
                <div className="text-area">
                    <textarea></textarea>
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