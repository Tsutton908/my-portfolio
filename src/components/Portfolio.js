import React from 'react';
import './portfolio.css';
import HexagonButton from './HexagonButton';

function Portfolio() {
    return (
        <div className="projects-box" id="portfolio">
            <h1 className="projects-header">Projects</h1>
            <div id="box"></div>
            <HexagonButton />
        </div>
    );
}

export default Portfolio;