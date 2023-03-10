import React from 'react';
import '../styles/aboutMe.css';

function AboutMe() {
    return (
            <div id="about-me">
                <h1>About Me</h1>
                <div className="about-text">
                    <p>
                        Hello, My name is Thomas and I'd like to briefly introduce myself. I have a Bachelor's of Science degree from the Unviversity of North Carolina Charlotte in Physics. 
                    </p>
                </div>
                <div className="flex-container">
                    <div className="card animate">
                        <div className="cardTitle" id="coffee">
                            <h3>General Information</h3>
                        </div>
                        <p>
                            Residence: United States
                            <br />
                            <br />
                            City: Raleigh, NC
                            <br />

                        </p>
                        <div className="cardColor"></div>
                    </div>
                    <div className="card animate">
                        <div className="cardTitle" id="coffee">
                            <h3>Technical</h3>
                        </div>
                        <p>
                            Outside of software engineering I am always working with my hands. Other interests and ablilities include:<br />
                        <br />
                        • Working in a machine shop<br />
                        <br />
                        • developing manufacturing practices<br />
                        <br />
                            
                        </p>
                    </div>
                    <div className="card animate">
                        <div className="cardTitle" id="coffee">
                            <h3>Growth Oriented</h3>
                        </div>
                        <p>
                            I love to learn in everything I do. I am always innovating, and looking for new ways to better my understanding and turn that into more success for my clients!
                        </p>
                    </div>
                    <div className="card animate">
                        <div className="cardTitle" id="coffee">
                            <h3>Hobbiest</h3>
                        </div>
                        <p>
                        • Love to play the Piano in my freetime <br />
                        <br />
                        • Avid Runner <br />
                        <br />
                        • Gym Enthusiast  <br />
                        <br />
                        • Working with 3D printing technologies
                        </p>
                    </div>
                </div>
                
            </div>
    );
}

export default AboutMe;