import React from 'react';
import Buttons from './Button';
import resume from '../images/Web_Resume_FullStack.pdf';
import '../styles/resume.css';

function Certifications() {
    return (
        <div id="certifications">
            <h1>Certifications</h1>
                <div className="certifications">
                    <a href="https://www.credly.com/earner/earned/badge/61e647c0-2899-4874-8a46-0b3a79d76d96" target="_blank">
                        <img id="logo" 
                            src="https://imgs.search.brave.com/fSoJRPvVNKJmaHw-fIIhNpeW37qLf-XwY8gY-iVsYZ4/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9kMS5h/d3NzdGF0aWMuY29t/L3RyYWluaW5nLWFu/ZC1jZXJ0aWZpY2F0/aW9uL0NlcnRpZmlj/YXRpb24lMjBCYWRn/ZXMvQVdTLUNlcnRp/ZmllZF9EZXZlbG9w/ZXJfQXNzb2NpYXRl/X2JhZGdlXzUxMng1/MTIuNjE2ZGY4ZmQ2/YzZhNDI5OGQwMTNi/Nzc4N2UwYmJiZjkz/ZjllMjc2MC5wbmc" 
                            alt=""
                            style={{ height: '100px', width: '100px' }}
                        />
                    </a>
                    <h2>
                        Amaozon Web Services Developer Associate 
                    </h2>
                    <a href="https://www.credly.com/earner/earned/badge/61e647c0-2899-4874-8a46-0b3a79d76d96" target="_blank">View Badge</a>
                </div>
        </div>
        
    )
}

export default Certifications;