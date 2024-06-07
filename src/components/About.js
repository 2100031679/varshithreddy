import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p>Welcome to our blog! We are dedicated to providing quality content for our readers.</p>
            <div className="author-info">
                <h3>Meet the Author</h3>
                <p>Hi, I'm Varshith Reddy, a frontend developer passionate about creating user-friendly and visually appealing web experiences.</p>
                <p>Contact me at:</p>
                <ul>
                    <li>Phone: 8019910680</li>
                    <li>Email: myakavar@gmail.com</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
