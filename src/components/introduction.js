import { Link } from 'react-router-dom';
import profilePicture from '../assets/images/profile-picture.png';
import '../styles/intro.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';



const Intro = () => {

    const [typeEffect] = useTypewriter ({
        words: ['software engineer', 'ux/ui designer','mobile developer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50
    })


    return (
        <div className="intro-root">
            <div className="flex-container">
                <div className="flex-1">
                    <img src={profilePicture} />
                </div>
                <div className="flex-2">
                    <div className="row">
                        <h1>Hello, I'm <span className="highlight">Adaii</span>.</h1>
                    </div>
                    <div className='row'>
                        <h2>Im a <span className="highlight">{typeEffect}</span>.</h2>
                    </div>
                    <div className="row">
                        <Link to="/">View my work</Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Intro;