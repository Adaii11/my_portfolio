import Navbar from "../components/navbar";
import PComponent from "../components/particles";
import '../styles/work.css';
import image1 from '../assets/images/profile-picture.png';
import reactLogo from '../assets/images/pngwing.com-react.png';
import nodejs from '../assets/images/pngwing.com-node.png';
import sass from '../assets/images/pngwing.com-sass.png';
import html from '../assets/images/pngwing.com-html.png';
import js from '../assets/images/pngwing.com-js.png';
import mongo from '../assets/images/pngwing.com-mongoDb.png';
import git from '../assets/images/pngwing.com-git.png';
import express from '../assets/images/pngwing.com-express.png';
import Footer from "../components/footer";

const Work = () => {

    return (
        <div className="workPage-root">
            <Navbar />
            <PComponent />
            <h1 className="header">Projects</h1>
            <div className="project">
                <div className="row-left" alt="1st row">
                    <div className="image-background">
                        <div className="image-container">
                            <div>Coming Soon</div>
                        </div>
                    </div>
                    <div className="info">
                        <h2 className="title">Macro-Fit</h2>
                        <h4 className="description">Track your progess with this CRUD full stack application. Manage your macros, calories to track progress on cutting or bulking.</h4>
                        <div className="tech">
                            <h4>Builts using</h4>
                            <div className="icons">
                                <div className="logo">
                                    <img src={html} />
                                </div>
                                <div className="logo">
                                    <img src={js} />
                                </div>
                                <div className="logo">
                                    <img src={reactLogo} />
                                </div>
                                <div className="logo">
                                    <img src={nodejs} />
                                </div>
                                <div className="logo">
                                    <img src={sass} />
                                </div>
                                <div className="logo">
                                    <img src={express} />
                                </div>
                                <div className="logo">
                                    <img src={mongo} />
                                </div>
                                <div className="logo">
                                    <img src={git} />
                                </div>
                            </div>
                        </div>
                        <div className="button-container">
                            <a>Live App</a>
                            <a>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="row-right" alt="1st row">
                    <div className="image-background">
                        <div className="image-container">
                            {/*<img src={image1}/>*/}
                            <div>Coming Soon</div>
                        </div>
                    </div>
                    <div className="info">
                        <h2 className="title">Crypto Portal</h2>
                        <h4 className="description">A portal that will show all your crypto needs using API's. This application is a simple dashboard to view all your crypto.</h4>
                        <div className="tech">
                            <h4>Builts using</h4>
                            <div className="icons">
                                <div className="logo">
                                    <img src={html} />
                                </div>
                                <div className="logo">
                                    <img src={js} />
                                </div>
                                <div className="logo">
                                    <img src={reactLogo} />
                                </div>
                                <div className="logo">
                                    <img src={nodejs} />
                                </div>
                                <div className="logo">
                                    <img src={sass} />
                                </div>
                                <div className="logo">
                                    <img src={express} />
                                </div>
                                <div className="logo">
                                    <img src={mongo} />
                                </div>
                                <div className="logo">
                                    <img src={git} />
                                </div>
                            </div>
                        </div>
                        <div className="button-container">
                            <a>Live App</a>
                            <a>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="row-left" alt="1st row">
                    <div className="image-background">
                        <div className="image-container">
                            {/*<img src={image1}/>*/}
                            <div>Coming Soon</div>
                        </div>
                    </div>
                    <div className="info">
                        <h2 className="title">Password Locker</h2>
                        <h4 className="description">Want to keep track of passwords for you and your family memebers? I built this fullstack CRUD application that holds your information. a simple app that you download to hold the data locally.</h4>
                        <div className="tech">
                            <h4>Builts using</h4>
                            <div className="icons">
                                <div className="logo">
                                    <img src={html} />
                                </div>
                                <div className="logo">
                                    <img src={js} />
                                </div>
                                <div className="logo">
                                    <img src={reactLogo} />
                                </div>
                                <div className="logo">
                                    <img src={nodejs} />
                                </div>
                                <div className="logo">
                                    <img src={sass} />
                                </div>
                                <div className="logo">
                                    <img src={express} />
                                </div>
                                <div className="logo">
                                    <img src={mongo} />
                                </div>
                                <div className="logo">
                                    <img src={git} />
                                </div>
                            </div>
                        </div>
                        <div className="button-container">
                            <a>Live App</a>
                            <a>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    )
    
}

export default Work;
