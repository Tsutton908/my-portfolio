import React from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import './section.css';

function ContentSection() {
    return (
        <div>
            <div className="section-1">
                <AboutMe />
            </div>
            <div className="section">
                <Portfolio />
            </div>
            <div className="section-2">
                <Resume />
            </div>
            <div className="contact">
                <Contact />
            </div>
        </div>
    );
}
 
export default ContentSection;