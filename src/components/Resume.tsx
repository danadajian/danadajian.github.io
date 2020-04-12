import React from 'react';
import '../App.css';
import {GOOGLE_DOCS_EMBED_LINK_FOR_RESUME} from "../constants";
import {Navbar} from "./Navbar";

export const Resume = () => {
    return (
        <div className="App">
            <Navbar/>
            <iframe title={'Resume'} src={GOOGLE_DOCS_EMBED_LINK_FOR_RESUME}/>
        </div>
    );
};
