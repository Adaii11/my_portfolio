import Navbar from "../components/navbar"
import PComponent from "../components/particles"
import { Link } from 'react-router-dom';
import '../styles/notFound.css';

const NotFound = () => {
    return (
        <div className="not-found-root">
            <Navbar />
            <PComponent />
            <div className="not-found-container">
                <h1><span>404</span> - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <p>Please check the URL or go back to the <Link to="/">home page</Link></p>
            </div>
        </div>
    )
}

export default NotFound