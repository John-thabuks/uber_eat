import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-banner">
                <h1>About Us</h1>
                <p>Discover the story behind our mission to deliver great food experiences</p>
            </div>
            <div className="about-content">
                <div className="section">
                    <h2>Our Story</h2>
                    <p>Founded in 2024, Uber Eats has grown from a small startup to a global leader in food delivery. Our journey began with a simple idea: to make it easier for people to access their favorite foods from local restaurants. Today, we connect millions of customers with restaurants in over X countries, delivering delicious meals to their doorsteps.</p>
                </div>
                <div className="section">
                    <h2>Our Mission</h2>
                    <p>At Uber Eats, our mission is to redefine the way people experience food delivery. We strive to provide convenient, reliable, and delightful food delivery services that enrich the lives of our customers, restaurant partners, and delivery partners.</p>
                </div>
                <div className="section">
                    <h2>Our Team</h2>
                    <p>Behind every successful delivery is a dedicated team of professionals committed to excellence. From software engineers and designers to customer support specialists and delivery partners, our team works tirelessly to ensure that every order is fulfilled with care and efficiency.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
