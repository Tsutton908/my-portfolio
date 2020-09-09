import React from 'react';
import './aboutMe.css';

function AboutMe() {
    return (
            <div id="about-me">
                <h1>About Me</h1>
                <div id="box"></div>
                <div className="text">
                    <p>
                    Hello! I'm Thomas, an aspiring software engineer based in Raleigh, NC.
                    <br />
                    <br />
                    I have a Bachelor of Science in Physics from the University of North Carolina at Charlotte.
                    My interests include: UI/UX design, encryption, and deep learning to name a few.
                    I strive to build products that provide intuitive, dynamic, and performant experiences.
                    <br />
                    <br />
                    Here are a few technologies I've been working with recently:  

                    </p>
                    <br />
                    <ul>
                        <li>Javascript (ES6)</li>
                        <li>Python</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>HTML5 & CSS3</li>
                        <li>Adobe Suite</li>
                    </ul>
                </div>
                <div id="profile-picture"></div>
                <div id="icon1"></div>
                <div id="icon2"></div>
                <div id="icon3"></div>
                <h3 id="icon1-text">Responsive</h3>
                <h3 id="icon2-text">Dynamic</h3>
                <h3 id="icon3-text">Efficient</h3>
            </div>
    );
}

export default AboutMe;