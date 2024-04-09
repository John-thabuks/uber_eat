import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-banner">
                <h1>Contact Us</h1>
                <p className="quote">"We are the torchbearer to Software Development"</p>
            </div>
            <div className="contact-details">
                <div className="contact-info">
                    <h2>Contact</h2>
                    <p>Name: John Muthabuku</p>
                    <p>Phone: 0722-495544</p>
                    <p>Email: john.muthabuku@student.moringaschool.com</p>
                </div>
                <div className="google-map">

                    <iframe
                        title="Google Maps"
                        width="100%"
                        height="400"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0210196938796!2d36.78737731435039!3d-1.288592036006103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f182a19c2c6b9%3A0x5e3032abec8a97c4!2sMoringa%20School!5e0!3m2!1sen!2ske!4v1631541500103!5m2!1sen!2ske"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
