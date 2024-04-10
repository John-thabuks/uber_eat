import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link to={'/'} className="navbar-link">Home</Link>
            <Link to={'/About'} className="navbar-link">About</Link>
            <Link to={'/Contact'} className="navbar-link">Contact</Link>
            <Link to={'/Login'} className="navbar-link">Login</Link>
        </div>
    );
};

export default Navbar;



