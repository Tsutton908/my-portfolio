import React from 'react';
import { useEffect, useState } from 'react';
/*
import layer1 from "./images/layer-6.png"; 
import layer2 from "/portfolio/images/layer-5.png"; /*
import layer3 from "/images/layer-4.png";
import layer4 from "/images/layer-3.png";
import layer5 from "/images/layer-2.png";
import layer6 from "/images/layer-1.png"; */ 
import './starsStyle.css';


const layer1 = "/images/layer-6.png";
const layer2 = "/images/layer-5.png";
const layer3 = "/images/layer-4.png";
const layer4 = "/images/layer-3.PNG";
const layer5 = "/images/layer-2.PNG";
const layer6 = "/images/layer-1.png";
 

function StarsBackground() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [offset])

    return (
            <section className="main" id="main">
                <img src={layer1} 
                    className="layer" 
                    alt="layer1" 
                    id="sky" 
                    style={{
                        transform: `translateY(${offset * 0.4}px)`
                    }}
                />
                <img src={layer2} 
                    className="layer" 
                    alt="layer1" 
                    id="galaxy"
                    style={{
                        filter: `blur(.5px)`,
                        transform: `translateY(${offset * 0.6}px) scale(${offset/8000+1})`
                    }}
                />
                <img src={layer3} 
                    className="layer" 
                    alt="layer1" 
                    style={{
                        transform: `translateY(${offset * 0.2}px)`
                    }}
                />
                <img src={layer4} 
                    className="layer" 
                    alt="layer1" 
                    style={{
                        transform: `translateY(${offset * 0.4}px)`
                    }}
                />
                <img src={layer5} 
                    className="layer" 
                    alt="layer1" 
                    style={{
                        transform: `translateY(${offset * 0.7}px)`
                    }}
                />
                <h1 id="banner-text1">Hello! I'm William Sutton</h1>
                <h2 id="banner-text2">But Please, Call me Thomas</h2>
                <img src={layer6} 
                    className="layer" 
                    alt="layer1" 
                    id="mountain" 
                    style={{
                        transform: `scalex(${offset/8000+1})` 
                    }}
                />
            </section>
        )
}


export default StarsBackground;