import React from 'react';
import { Link } from 'react-router-dom';
import './Heder.css';

const Heder = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/review">ORder reviw</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Heder;