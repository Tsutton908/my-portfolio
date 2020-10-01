import React from 'react';
import { useState, useEffect } from 'react';
import './hexagonButton.css';

const HexagonButton = (props) => {
    const [buttonActive, setbuttonActive] = useState(false);

    useEffect(() => {
        const element = document.querySelector('.hexagon-image');

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

    const image = props.image;
    const position = props.position;
    console.log(props.position);

    return (
        <div className="hexagon" style={position}>
            <div className="hexagon-inside">
                <a href="https://github.com/Tsutton908">
                    <div className='hexagon-image' style={image}>
                        <div className={`button-hover-${props.id} ${buttonActive ? 'active' : ''}`}></div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default HexagonButton;