import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

function NavBar() {
    const [navbar, setNavBar] = useState(false);

    const changeNavBar = () => {
        const height = window.innerHeight
        //original scrollY >= 756
        if (window.scrollY >= height) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changeNavBar);

    return (
        <div className={navbar ? 'main-header active' : 'main-header'}>
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <Link
                        activeClass="active"
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >Home</Link>
                    <Link
                        activeClass="active"
                        to="about-me"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >About Me</Link>
                    <Link
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >Portfolio</Link>
                    <Link
                        activeClass="active"
                        to="resume"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >Resume</Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >Contact</Link>
                </ul>
        </nav>
        </div>
    );
}

export default NavBar;