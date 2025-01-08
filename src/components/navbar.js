import '../styles/navbar.css'
import {useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    //TODO: add useState to toggle menu
    const [navOpen, setNavOpen] = useState(false);
    

    const toggleMenu = () => {
        setNavOpen(!navOpen);
    }


    //TODO: add function that resets the useState for toggle menu
    const [height, setHeight] = useState('0px');
    const navLinksRef = useRef(null);

    useEffect(() => {
        setHeight(navOpen ? `${navLinksRef.current.scrollHeight}px` : '0px');
    }, [navOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 800) {
                setNavOpen(false);
                setHeight('auto'); 
            } else {
                setHeight(navOpen ? `${navLinksRef.current.scrollHeight}px` : '0px');
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [navOpen]);



    return (
        <div className="nav-root">
            <div className="navbar-container">
                <Link className="brand" to="/">Adaii Murillo</Link>
                <ul ref={navLinksRef} className={`nav-links ${navOpen ? 'show' : ""}`} style={{ height: window.innerWidth > 800 ? 'auto' : height }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className={`nav-toggle ${navOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className={`bar ${navOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${navOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${navOpen ? 'open' : ''}`}></div>
                    <div className={`exit ${navOpen ? 'close' : ''}`} onClick= {toggleMenu}>
                        <div className={`x ${navOpen ? 'close' : ''}`}></div>
                        <div className={`x ${navOpen ? 'close' : ''}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;