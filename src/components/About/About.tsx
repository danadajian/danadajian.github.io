import React from 'react';
import '../../App.css';
import './About.css';
import {Navbar} from '../Navbar/Navbar';

export const About = () => {
    return (
        <div className="About">
            <Navbar/>
            <header className="About-header">
                <h1>About Me</h1>
            </header>
            <section>
                <h1>
                    Education
                </h1>
                <p>
                    I graduated from Northwestern University with a Bachelor's Degree in Math and Economics.
                </p>
            </section>
            <section>
                <h1>
                    Interests
                </h1>
                    <p>
                        I play golf in the summer, and paddle tennis in the winter. In my free time,
                        I love watching football, playing the piano, and producing music.
                    </p>
            </section>
        </div>
    );
};
