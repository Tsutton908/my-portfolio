import React from 'react';
import './portfolio.css';
import HexagonButton from './HexagonButton';

const Portfolio = () => {
    const images = {
        image1: '/images/pig-game.JPG',
        image2: '/images/streamy.JPG',
        image3: '/images/videos.JPG',
        image4: '/images/images.JPG'
    }

    const card1 = {
        hexagonImageProperties: {
            backgroundImage: `url(${images.image1})`,
        },
        hexagonPositionProperties: {
            position: 'relative',
            top: '200px',
            margin: '10px auto'
        },
        link: 'https://pedantic-bell-71b506.netlify.app/'
    }

    const card2 = {
        hexagonImageProperties: {
            backgroundImage: `url(${images.image2})`,
            backgroundSize: '50% 100%'
        },
        hexagonPositionProperties: {
            position: 'relative',
            top: '100px',
            /*left: '940px'*/
            margin: '0 auto',
            left: '200px'
        },
        link: 'https://github.com/Tsutton908/stream-react-webapp'
    }

    const card3 = {
        hexagonImageProperties: {
            backgroundImage: `url(${images.image3})`,
        },
        hexagonPositionProperties: {
            position: 'relative',
            top: '0px',
            margin: '10px auto'
        },
        link: 'https://github.com/Tsutton908/yt-app'
    }

    const card4 = {
        hexagonImageProperties: {
            backgroundImage: `url(${images.image4})`,
        },
        hexagonPositionProperties: {
            position: 'relative',
            top: '-320px',
            /*left: '545px'*/
            margin: '0 auto',
            left: '-200px'
        }
    }

    return (
        <div className="projects-box" id="portfolio">
            <h1 className="projects-header">Projects</h1>
            <div id="box"></div>
            <HexagonButton 
                image={card1.hexagonImageProperties}
                position={card1.hexagonPositionProperties}
                id={1}
                link={card1.link}
            />
            <HexagonButton 
                image={card2.hexagonImageProperties}
                position={card2.hexagonPositionProperties}
                id={2}
                link={card2.link}
            />
            <HexagonButton 
                image={card3.hexagonImageProperties}
                position={card3.hexagonPositionProperties}
                id={3}
                link={card3.link}
            />
            <HexagonButton 
                image={card4.hexagonImageProperties}
                position={card4.hexagonPositionProperties}
                id={4}
            />
        </div>
    );
}

export default Portfolio;