import React from 'react'

import '../styles/project.css';

const Project = (props) => {

    const techLength = props.techs.length - 1;

  return (
    <div className="project">
        <h2>
            <a href={props.link} target="blank">  
            {props.title}
            </a>
        </h2>
        <div className="project_picture"> 
            <a href={props.link} target="blank">  
                <img src={props.image} alt="" />
            </a>
        </div>
        <h4>{props.description}</h4>
        <div className="techs">
        {props.techs.map((tech, i) => {
                        if (techLength !== i) {
                            return <span key={i}>{tech}  • </span>
                        } else {
                            return <span key={i}>{tech}</span>
                        }
                    })}
        </div>
    </div>
  )
}

export default Project