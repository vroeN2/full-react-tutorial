import { Link } from 'react-router-dom';

// component responsible for main navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Raven Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar