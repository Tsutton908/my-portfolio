import React from 'react';
import Buttons from './Button';
import resume from '../images/Web_Resume_FullStack.pdf';
import '../styles/resume.css';

function Resume() {
    return (
        <div id="resume">
            <a
                className="resume-button-position" 
                href={resume}
                target="_blank" 
            >
            <Buttons 
                onClick={() => console.log('clicked')} 
                type="button"
                buttonStyle="btn--primary--outline"
                buttonSize="btn--medium"
            />
            </a>
        </div>
        
    )
}

export default Resume;