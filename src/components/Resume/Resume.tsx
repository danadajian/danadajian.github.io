import React from 'react';
import './Resume.css';
import {GOOGLE_DOCS_EMBED_LINK_FOR_RESUME} from "../../constants";
import {Navbar} from '../Navbar/Navbar';

export const Resume = () => {
    return (
        <div className="Resume">
            <Navbar/>
            <header className="Resume-header">
                <h1>Resume</h1>
            </header>
            <iframe className="Resume-object" title={'Resume'} src={GOOGLE_DOCS_EMBED_LINK_FOR_RESUME}/>
        </div>
    );
};
