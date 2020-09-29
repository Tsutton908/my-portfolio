import React from 'react';
import { useState, useEffect } from 'react';
import './hexagonButton.css';

const HexagonButton = () => {
    const [buttonActive, setbuttonActive] = useState(false);

    useEffect(() => {
        const element = document.querySelector(".hexagon-image");

        function onHover() {
            setbuttonActive(true)
        }

        function offHover() {
            setbuttonActive(false)
        }

        element.addEventListener("mouseover", onHover)
        element.addEventListener("mouseout", offHover)

        return () => {
            element.removeEventListener("mouseover", onHover)
            element.removeEventListener("mouseout", offHover)
        }
    }, [buttonActive])


    return (
        <div className="hexagon">
            <div className="hexagon-inside">
                <a href="https://github.com/Tsutton908">
                    <div className='hexagon-image'>
                        <div className={`button-hover ${buttonActive ? 'active' : ''}`}></div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default HexagonButton;