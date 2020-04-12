import React from 'react';
import '../App.css';
import {Navbar} from "./Navbar";

export const Home = () => {
    return (
        <div className="App">
            <Navbar/>
            <header className="App-header">
                <h1>Dan Adajian</h1>
                <p>
                    Welcome to my site!
                </p>
            </header>
        </div>
    );
};
