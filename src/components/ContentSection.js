import React from 'react';
import AboutMe from './AboutMe';
import Certifications from './Certifications';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import '../styles/section.css';

function ContentSection() {
    return (
        <div>
            <div className="section-1">
                <AboutMe />
            </div>
            <div className="section-1">
                <Certifications />
            </div>
            <div className="section-1">
                <Skills />
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