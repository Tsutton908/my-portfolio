import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/button.css';

const styles = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success--outline",
]

const sizes = [
    "btn--medium",
    "btn--small",
    "btn--large"
]

const Buttons = ({ children, type, onClick, buttonStyle, buttonSize }) => {

    const [buttonActive, setbuttonActive] = useState(false);

    useEffect(() => {
        const element = document.querySelector(".btn");

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

    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];
    const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${buttonActive ? 'active' : ''}`} onClick={onClick} type={type}>
            {children}
            Look at my Resume!
        </button>
    )
}

export default Buttons;