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
import '../styles/starsStyle.css';


const layer1 = "/images/stars.png";
const layer2 = "/images/moon.png";
const layer3 = "/images/mountain-main.png";
const layer4 = "/images/bird-1.PNG";
const layer7 = "/images/bird-2.png";
const layer5 = "/images/mountains-middle.PNG";
const layer6 = "/images/mountain-front.png";
const layer1Tiny = "/images/layer-6-tiny-test.png";
const layer2Tiny = "/images/layer-5-tiny-test.png";
const layer3Tiny = "/images/layer-4-tiny-test.png";
const layer4Tiny = "/images/layer-3-tiny-test.png";
const layer5Tiny = "/images/layer-2-tiny-test.png";
const layer6Tiny = "/images/layer-1-tiny-test.png";

 

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
                <ProgressiveImage delay={1000} src={layer1} placeholder={layer1}>
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
                <ProgressiveImage delay={1000} src={layer2} placeholder={layer2}>
                    {(src) => (
                    <img src={src} 
                        className="layer" 
                        alt="layer1" 
                        id="galaxy"
                        style={{
                            transform: `translateY(${offset * 0.4}px) translateX(${offset * 0.15}px)`
                        }}
                    />
                    )}
                </ProgressiveImage>

                <h1 
                    id="banner-text1"
                    style={{
                        opacity: `${1-offset/200}`,
                        transform: `translateX(-${offset * 0.85}px)` 
                    }}
                >Hello! I'm William Sutton</h1>
                <h2 
                    id="banner-text2"
                    style={{
                        opacity: `${1-offset/200}`,
                        transform: `translateX(${offset * 0.85}px)`
                    }}
                >But Please, Call me Thomas</h2>
                
                <ProgressiveImage delay={1000} src={layer3} placeholder={layer3}>
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
                {
                    /*
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
                    */
                }
                <ProgressiveImage delay={1000} src={layer4} placeholder={layer4}>
                    {(src) => (
                        <img src={src} 
                            className="layer" 
                            alt="layer1" 
                            style={{
                                top: '-10px',
                                left: '-150px',
                                transform: `translateY(${offset * 0.1}px) translateX(-${offset * 0.4}px)`
                            }}
                        />
                    )}
                </ProgressiveImage>
                <ProgressiveImage delay={1000} src={layer7} placeholder={layer7}>
                    {(src) => (
                        <img src={src} 
                            className="layer" 
                            alt="layer1" 
                            style={{
                                top: '-10px',
                                left: '-150px',
                                transform: `translateY(${offset * 0.1}px) translateX(${offset * 0.6}px)`
                            }}
                        />
                    )}
                </ProgressiveImage>
                <ProgressiveImage delay={1000} src={layer5} placeholder={layer5}>
                    {(src) => (
                        <img src={src} 
                            className="layer" 
                            alt="layer1" 
                            style={{
                                transform: `translateY(${offset * 0.2}px) translateX(-${offset * 0.2}px)`
                            }}
                        />
                    )}
                </ProgressiveImage>
                
                <ProgressiveImage delay={1000} src={layer6} placeholder={layer6}>
                    {(src) => (
                        <img src={src} 
                            className="layer" 
                            alt="layer1" 
                            id="mountain-front" 
                            style={{
                                transform: `scalex(${offset/8000+1}) translateX(${offset * 0.7}px)` 
                            }}
                        />
                    )}
                </ProgressiveImage>
            </section>
        )
}


export default StarsBackground;