import React from 'react';
import { useEffect, useState } from 'react';
import ProgressiveImage from 'react-progressive-image';
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
const layer1Tiny = "/images/layer-6-tiny.png";
const layer2Tiny = "/images/layer-5-tiny.png";
const layer3Tiny = "/images/layer-4-tiny.png";
const layer4Tiny = "/images/layer-3-tiny.PNG";
const layer5Tiny = "/images/layer-2-tiny.PNG";
const layer6Tiny = "/images/layer-1-tiny.png";

 

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
                <ProgressiveImage delay={1000} src={layer1} placeholder={layer1Tiny}>
                    {(src) => (
                        <img src={src} 
                        className="layer" 
                        alt="layer1" 
                        id="sky" 
                        style={{
                            transform: `translateY(${offset * 0.4}px)`
                        }}
                        />
                    )}
                </ProgressiveImage>
                <ProgressiveImage delay={1000} src={layer2} placeholder={layer2Tiny}>
                    {(src) => (
                    <img src={src} 
                        className="layer" 
                        alt="layer1" 
                        id="galaxy"
                        style={{
                            filter: `blur(.5px)`,
                            transform: `translateY(${offset * 0.6}px) scale(${offset/8000+1})`
                        }}
                    />
                    )}
                </ProgressiveImage>
                <ProgressiveImage delay={1000} src={layer3} placeholder={layer3Tiny}>
                    {(src) => (
                        <img src={src} 
                            className="layer" 
                            alt="layer1" 
                            style={{
                                transform: `translateY(${offset * 0.2}px)`
                            }}
                        />
                    )}
                </ProgressiveImage>
                <ProgressiveImage delay={1000} src={layer4} placeholder={layer4Tiny}>
                    {(src) => (
                        <img src={src} 
                            className="layer" 
                            alt="layer1" 
                            style={{
                                transform: `translateY(${offset * 0.4}px)`
                            }}
                        />
                    )}
                </ProgressiveImage>
                <ProgressiveImage delay={1000} src={layer5} placeholder={layer5Tiny}>
                    {(src) => (
                        <img src={src} 
                            className="layer" 
                            alt="layer1" 
                            style={{
                                transform: `translateY(${offset * 0.7}px)`
                            }}
                        />
                    )}
                </ProgressiveImage>
                <h1 id="banner-text1">Hello! I'm William Sutton</h1>
                <h2 id="banner-text2">But Please, Call me Thomas</h2>
                <ProgressiveImage delay={1000} src={layer6} placeholder={layer6Tiny}>
                    {(src) => (
                        <img src={src} 
                            className="layer" 
                            alt="layer1" 
                            id="mountain" 
                            style={{
                                transform: `scalex(${offset/8000+1})` 
                            }}
                        />
                    )}
                </ProgressiveImage>
            </section>
        )
}


export default StarsBackground;