import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/resume">Résumé</Link>
            <Link to="/projects">Projects</Link>
        </div>
    );
};
