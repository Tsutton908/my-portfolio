import React from 'react';
import Buttons from './Button';
import resume from '../images/William_Sutton_Resume().pdf';
import './resume.css';

function Resume() {
    return (
        <div id="resume">
            <a
                className="resume-button-position" 
                href={resume}
                download="Sutton_Portfolio.pdf" 
            >
            <Buttons 
                onClick={() => console.log('clicked')} 
                type="button"
                buttonStyle="btn--primary--outline"
                buttonSize="btn--medium"
            />
            </a>
            <div id="transition"></div>
        </div>
        
    )
}

export default Resume;