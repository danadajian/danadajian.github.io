import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
        </div>
    );
};
