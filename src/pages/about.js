import '../styles/about.css';
import Navbar from '../components/navbar';
import PComponent from "../components/particles";
import reactLogo from '../assets/images/pngwing.com-react.png';
import nodejs from '../assets/images/pngwing.com-node.png';
import sass from '../assets/images/pngwing.com-sass.png';
import html from '../assets/images/pngwing.com-html.png';
import js from '../assets/images/pngwing.com-js.png';
import mongo from '../assets/images/pngwing.com-mongoDb.png';
import git from '../assets/images/pngwing.com-git.png';
import express from '../assets/images/pngwing.com-express.png';
import css from '../assets/images/pngwing.com-css.png';
import python from '../assets/images/pngwing.com-python.png';
import Footer from '../components/footer';
import resume from '../assets/images/resume-dark.jpg';



const About = () => {
    return (
        <div className="about-root">
            <Navbar />
            <PComponent />
            <h1 className="header">About Me</h1>
            <div className="about-body">
                <div className="about-container">
                    <div className="about-image">
                        <svg width="20rem" height="20rem" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="personIconTitle" stroke-width="0.3" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#000000"> 
                            <title id="personIconTitle">Person</title> 
                            <path d="M4,20 C4,17 8,17 10,15 C11,14 8,14 8,9 C8,5.667 9.333,4 12,4 C14.667,4 16,5.667 16,9 C16,14 13,14 14,15 C16,17 20,17 20,20"/> 
                        </svg>
                    </div>
                    <div className="about-description">
                        <h2>Background</h2>
                        <p>I'm a self-taught developer with a B.S. In Computer Science. I'm passionate about building clean and delightful web applications. When I am not developing, I love playing video games and listening to unique soundtracks for inspiration. Additionally, I like working out and going for long walk to gain clarity for development.</p>
                    </div>
                </div>
                <div className="tech-stack">
                    <div className="tech-flexbox">
                        <div className="column">
                            <div className="skill">
                                <img src={reactLogo}/>
                            </div>
                            <div className="skill">
                                <img src={nodejs}/>
                            </div>
                            <div className="skill">
                                <img src={html}/>
                            </div>
                        </div>
                        <div className="column">
                        <div className="skill">
                                <img src={js}/>
                            </div>
                            <div className="skill">
                                <img src={sass}/>
                            </div>
                            <div className="skill">
                                <img src={mongo}/>
                            </div>
                            <div className="skill">
                                <img src={css}/>
                            </div>
                        </div>
                        <div className="column">
                            <div className="skill">
                                <img src={express}/>
                            </div>
                            <div className="skill">
                                <img src={git}/>
                            </div>
                            <div className="skill">
                                <img src={python}/>
                            </div>
                        </div>
                    </div>
                    <div className="tech-description">
                        <h2>Skills</h2>
                        <p>I utilize numerous front-end technologies like Node.js, React, JavaScript, and Sass. I focus on responsiveness while also providing a seamless user experience. I'm committed to learning new technologies in pursuit to improve my craft.</p>
                    </div>
                </div>
                <div className="my-resume">
                    <h2>My resume</h2>
                    <div className="resume-container">
                        <img src={resume}/>
                    </div>
                    <div className="button-container">
                        <a className="download" href="/resume.pdf" download="resume.pdf">download</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;