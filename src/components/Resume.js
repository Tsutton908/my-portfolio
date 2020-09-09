import React from 'react';
import Buttons from './Button';
import './resume.css';

function Resume() {
    return (
        <div id="resume">
            <div className="resume-button-position">
            <Buttons 
                onClick={() => console.log('clicked')} 
                type="button"
                buttonStyle="btn--primary--outline"
                buttonSize="btn--medium"
            />
            </div>
            <div id="transition"></div>
        </div>
        
    )
}

export default Resume;