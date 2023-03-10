import React from 'react';
import '../styles/portfolio.css';
import HexagonButton from './HexagonButton';
import Project from './Project';

const Portfolio = () => {
    const images = {
        image1: '/images/freefall.png',
        image2: '/images/ncState_pic.PNG',
        image3: '/images/TrelloCloneAngular.png',
        image4: '/images/irt_pic.PNG',
        image5: '/images/spotify_pic.PNG',
        image6: '/images/FujiTheme.PNG'
    }

    const card1 = {
        title: 'FreeFall Image Social App',
        image: images.image1,
        description: 'Application allows users to create profiles with HTTPS encryption, upload images, videos,and text posts to Amazon AWS S3, create and view posts, and follow communities.',
        techs: [
            'Javascript', 'React.js', 'Nextjs', 'Redux', 'Node.js','Express.js','Typescript','MongoDB', 'AWS S3','Git', 'HTML','CSS','Bootstrap'
        ],
        link: 'https://freefall.vercel.app/'
    }

    const card2 = {
        title: 'NC State McKimmon Website',
        image: images.image2,
        description: "Worked in a team of 4 alongside NC State University to redesign and build out a new website for the university's conference center building.",
        techs: [
            'HTML', 'CSS', 'Javascript', 'PHP', 'Wordpress'
        ],
        link: 'https://mckimmoncenter.ncsu.edu/'
    }

    const card3 = {
        title: 'Trello Clone',
        image: images.image3,
        description: "Constructed single page web application using Angular, and RxJS to create and modify kanban style boards and tasks for project management and productivity.",
        techs: [
            'HTML', 'CSS', 'Javascript', 'Angular', 'RxJS', 'Typescript', 'SASS'
        ],
        link: 'https://trello-clone-3d38d.web.app/'
    }

    const card4 = {
        title: 'iRT inc. Website',
        image: images.image4,
        description: "Worked with a team of 4 to divide the project; presented estimates and regular status updates to clients. Delivered swift implementation of responsive company website for client.",
        techs: [
            'HTML', 'CSS', 'Javascript', 'PHP', 'Wordpress'
        ],
        link: 'http://irtinc.us/'
    }

    const card5 = {
        title: 'Spotify Clone Web Player',
        image: images.image5,
        description: " Developed website primarily using React.js and Redux to stream and manipulate user's Spotify playlists. Integrates with Spotify's public WebAPI to play songs, modify user's playlist's, get user's playlists, get new releases, get user's top 10 tracks.",
        techs: [
            'Javascript', 'React.js', 'Redux', 'Node.js', 'Firebase','Spotify API','Git', 'HTML','CSS','Bootstrap'
        ],
        link: 'https://music-app-2f906.web.app/'
    }

    const card6 = {
        title: 'Visual Studio Code Fuji-Dark Theme',
        image: images.image6,
        description: "A minimal, dark blue theme for Visual Studio Code. Available on Visual Studio Marketplace, and npm.",
        techs: [
            'Javascript', 'JSON', 'VS Code'
        ],
        link: 'https://marketplace.visualstudio.com/items?itemName=WilliamSutton.fuji-dark'
        
    }

    return (
        <div className="projects-box" id="portfolio">
            <h1 className="projects-header">Portfolio</h1>
            <div className="projects-grid">
                <Project 
                    title={card1.title}
                    image={card1.image}
                    description={card1.description}
                    techs={card1.techs}
                    link={card1.link}
                />
                <Project 
                    title={card2.title}
                    image={card2.image}
                    description={card2.description}
                    techs={card2.techs}
                    link={card2.link}
                />
                <Project 
                    title={card3.title}
                    image={card3.image}
                    description={card3.description}
                    techs={card3.techs}
                    link={card3.link}
                />
                <Project 
                    title={card4.title}
                    image={card4.image}
                    description={card4.description}
                    techs={card4.techs}
                    link={card4.link}
                />
                <Project 
                    title={card5.title}
                    image={card5.image}
                    description={card5.description}
                    techs={card5.techs}
                    link={card5.link}
                />
                <Project 
                    title={card6.title}
                    image={card6.image}
                    description={card6.description}
                    techs={card6.techs}
                    link={card6.link}
                />
            </div>
        </div>
    );
}

export default Portfolio;