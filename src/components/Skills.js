import React from 'react';
import '../styles/skills.css';

/*
const htmlLogo48 = "/images/icons8-html-5-48.png";
const cssLogo48 = "/images/icons8-css3-48.png";
const javascriptLogo48 = "/images/icons8-javascript-48.png";
const pythonLogo48 = "/images/icons8-python-48.png";
const reactLogo48 = "/images/icons8-react-native-48.png";
const reduxLogo48 = "/images/icons8-redux-48.png";
const nodeLogo48 = "/images/icons8-node-js-48.png";
const csharpLogo48 = "/images/icons8-c-sharp-logo-2-48.png";
const mysqlLogo48 = "/images/icons8-mysql-logo-48.png";
const mongodbLogo48 = "/images/icons8-mongodb-48.png";
const githubLogo48 = "/images/icons8-github-48.png";
const gitLogo48 = "/images/icons8-git-48.png";
const firebaseLogo48 = "/images/icons8-firebase-48.png";
const gatsbyLogo48 = "/images/icons8-gatsby-48.png";
const wordpressLogo48 = "/images/icons8-wordpress-48.png";
const blenderLogo48 = "/images/icons8-blender-3d-48.png";
const awss3Logo48 = "/images/icons8-amazon-s3-48.png";
const vscodeLogo48 = "/images/icons8-visual-studio-code-48.png";
const typescriptLogo48 = "/images/icons8-typescript-48.png";
*/

const htmlLogo96 = "/images/icons8-html-5-96.png";
const cssLogo96 = "/images/icons8-css3-96.png";
const javascriptLogo96 = "/images/icons8-javascript-96.png";
const pythonLogo96 = "/images/icons8-python-96.png";
const reactLogo96 = "/images/icons8-react-native-96.png";
const reduxLogo96 = "/images/icons8-redux-96.png";
const nodeLogo96 = "/images/icons8-node-js-96.png";
const csharpLogo96 = "/images/icons8-c-sharp-logo-2-96.png";
const mysqlLogo96 = "/images/icons8-mysql-logo-96.png";
const mongodbLogo96 = "/images/icons8-mongodb-96.png";
const githubLogo96 = "/images/icons8-github-96.png";
const gitLogo96 = "/images/icons8-git-96.png";
const firebaseLogo96 = "/images/icons8-firebase-96.png";
const gatsbyLogo96 = "/images/icons8-gatsby-96.png";
const wordpressLogo96 = "/images/icons8-wordpress-96.png";
const blenderLogo96 = "/images/icons8-blender-3d-96.png";
const awsLogo96 = "/images/icons8-amazon-web-services-96.png";
const vscodeLogo96 = "/images/icons8-visual-studio-code-96.png";
const typescriptLogo96 = "/images/icons8-typescript-96.png";
const dockerLogo96 = "/images/icons8-docker-96.png";
const springBootLogo96 = "/images/icons8-spring-boot-96.png";
const angularLogo96 = "/images/icons8-angularjs-96.png";
const javaLogo96 = "/images/icons8-java-96.png";

function Skills() {
    return (
            <div id="skills">
                <div className="skills_content">
                    <h1>Skills</h1>
                    <div className="skills_left">
                        <h3>Technical</h3>
                        <div className="icons">
                            <div className="icon">
                                <img id="logo" src={htmlLogo96} alt=""/>
                                <p>HTML</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={cssLogo96} alt=""/>
                                <p>CSS</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={javascriptLogo96} alt=""/>
                                <p>JavaScript</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={pythonLogo96} alt=""/>
                                <p>Python</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={reactLogo96} alt=""/>
                                <p>React.js</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={typescriptLogo96} alt=""/>
                                <p>Typescript</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={angularLogo96} alt=""/>
                                <p>Angular</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={javaLogo96} alt=""/>
                                <p>Java</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={reactLogo96} alt=""/>
                                <p>React Native</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={reduxLogo96} alt=""/>
                                <p>Redux</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={nodeLogo96} alt=""/>
                                <p>Node.js</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={csharpLogo96} alt=""/>
                                <p>C#</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={mysqlLogo96} alt=""/>
                                <p>MySQL</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={gitLogo96} alt=""/>
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                    <div className="skills_right">
                        <h3>Software</h3>
                        <div className="icons">
                            <div className="icon">
                                <img id="logo" src={mongodbLogo96} alt=""/>
                                <p>MongoDB</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={githubLogo96} alt=""/>
                                <p>Github</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={firebaseLogo96} alt=""/>
                                <p>Firebase</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={gatsbyLogo96} alt=""/>
                                <p>Gatsby.js</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={wordpressLogo96} alt=""/>
                                <p>Wordpress</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={awsLogo96} alt=""/>
                                <p>AWS</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={dockerLogo96} alt=""/>
                                <p>Docker</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={springBootLogo96} alt=""/>
                                <p>Spring Boot</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={blenderLogo96} alt=""/>
                                <p>Blender</p>
                            </div>
                            <div className="icon">
                                <img id="logo" src={vscodeLogo96} alt=""/>
                                <p>Visual Studio Code</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Skills;