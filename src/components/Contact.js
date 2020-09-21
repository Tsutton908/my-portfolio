import React from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('portfolio-Email', 'template_0qfyhi6', e.target, 'user_fu8KGLxv3PPLGNCtWQj4O')   
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <div id="contact">
            <h1>Contact</h1>
            <div id="box"></div>
            <h2>
                Email: Tsutton908@gmail.com
                <br />
                <br />
                Phone: (910) 573-0754
                <br />
                <br />
                Location: Raleigh, NC
            </h2>
            <h3>
                or
                <br />
                <br />
                Send Direct Message
            </h3>
            <form className="email-form" onSubmit={sendEmail}>
                <input className="form-name" placeholder="Name" type="text" name="name" required></input>
                <input className="form-email" placeholder="Enter email" type="email" name="email" required></input>
                <textarea placeholder="Please enter your message" type="text" name="message"></textarea>
                <input className="submit-button" type="submit" id="submit" value="SUBMIT"></input>
            </form>

        </div>
    )
}

export default Contact;