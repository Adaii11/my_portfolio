import { Link } from 'react-router-dom';
import profilePicture from '../assets/images/profile-picture.png';
import '../styles/deskTpWrapper.css';
import {useState, useEffect} from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const PcWrapper = () => {

    const [typeEffect] = useTypewriter ({
        words: ['Software Developer', 'UI Designer', 'Tech Specialist'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50
    })


    const text = [
        {'quote': "If you quit once, it becomes a habit. never quit!", "author": "- Michael Jordan"},
        {'quote': "I don't care what anything was designed to do, I care about what it can do", 'author': "- Gene Fran"},
        {'quote': "To attain knowledge, add things everyday. To attain wisdom, remove things everyday.", 'author': "- Lao Tzu"}
    ]

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState('fade-in');

    useEffect (() => {
        const interval = setInterval(() => {
            setFade('fade-out');
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % text.length);
                setFade('fade-in');
            }, 1500)
        }, 11000)

        return () => clearInterval(interval); 

    }, [text.length]);


    return (
        <div className="deskTp-wrapper">
            <div className="flex-container">
                <div className="flex-1">
                    <img src={profilePicture} />
                </div>
                <div className="flex-2">
                    <div className="row">
                        <h1>Hello, I'm Adaii</h1>
                    </div>
                    <div className='row'>
                        <h2>Im a {typeEffect} <span className="highlight">/</span></h2>
                    </div>
                    <div className="row">
                        <Link to="/work">View my work</Link>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-flex">
                    <div className="quote-container">
                        <div className="quote">
                            <h2 className={fade}>{text[index].quote}</h2>
                        </div>
                        <div className="author">
                            <h4 className={fade}>{text[index].author}</h4>
                        </div>
                    </div>
                    <div className="social">
                        <a href="https://github.com/Adaii11?tab=overview&from=2024-12-01&to=2024-12-02">
                            <svg className="github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.24-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23.96-.27 1.99-.41 3.01-.41 1.02 0 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.69.24 2.94.12 3.25.77.85 1.24 1.92 1.24 3.24 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.82.57 4.77-1.59 8.21-6.09 8.21-11.39 0-6.63-5.37-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/adaii-murillo/">
                            <svg className="linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.53 20.35h-3.07v-11.81h3.07v11.81zm-1.53-13.48c-1 0-1.82-.82-1.82-1.82s.82-1.82 1.82-1.82 1.82.82 1.82 1.82-.82 1.82-1.82 1.82zm13.53 13.48h-3.07v-6.45c0-1.54-.03-3.52-2.14-3.52-2.14 0-2.47 1.67-2.47 3.4v6.57h-3.07v-11.81h2.94v1.61h.04c.41-.78 1.43-1.61 2.95-1.61 3.16 0 3.75 2.08 3.75 4.79v7.02z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">@2024 all rights reserved.</div>
            </div>
        </div>
    )
}

export default PcWrapper;