import React from 'react';
import '../../App.css';
import './Home.css';
import {Navbar} from '../Navbar/Navbar';

export const Home = () => {
    return (
        <div className="Home">
            <Navbar/>
            <header className="Home-header">
                <h1>Dan Adajian</h1>
                <p>
                    Welcome to my site! I'm a software developer from Chicago, IL.
                </p>
            </header>
        </div>
    );
};
