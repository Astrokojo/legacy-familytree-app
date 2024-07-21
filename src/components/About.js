import React from "react";

function Contact() {
    return (
        <div className="contact-page-wrapper">
            <h1 className="primary-heading">Need some help?<br />
            Send an email</h1>
            <div className="contact-form-container">
                <input type="text" placeholder="youremail@gmail.com" />
                <button className="secondary-button">Submit</button>
            </div>
        </div>
    );
};

export default Contact;
