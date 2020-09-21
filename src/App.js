import React from 'react';
import { useState } from 'react';
import StarsBackground from './components/StarsBackground';
import NavBar from './components/NavBar';
import ContentSection from './components/ContentSection';
import './components/main.css';

function App() {
    const [socials, setSocials] = useState(false);

    const changeSocials = () => {
        if (window.scrollY >= 356) {
            setSocials(true);
        } else {
            setSocials(false);
        }
    }

    window.addEventListener('scroll', changeSocials);

        return (
            <div>
                <StarsBackground />
                <NavBar />
                <ContentSection />
                <div className={socials ? 'socials active' : 'socials'}>
                    <a href="https://github.com/Tsutton908" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                    <a href="https://www.linkedin.com/in/william-sutton-85572b1ab/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <div className="side-box-active"></div>
                </div>
            </div>
        );
    
}

export default App;