import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-form mt-5">
      <h1 className="styled-h-1">Contact with Us</h1>
      <form action="">
        <div className="input-wrapper">
          <label htmlFor="name" className="newLine">
            Name
          </label>
          <input type="text" id="name" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email" className="newLine">
            Email
          </label>
          <input type="email" id="email" />
        </div>
        <div className="input-wrapper">
          <textarea
            name="msg"
            id="msg"
            rows="5"
            placeholder="Your Msg Here"
          ></textarea>
        </div>
        <a href="/" className="btn-primary">
          Send
        </a>
      </form>
    </div>
  );
};

export default Contact;
