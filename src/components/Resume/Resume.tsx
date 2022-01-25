import React from 'react';
import './Resume.css';
import {GOOGLE_DOCS_EMBED_LINK_FOR_RESUME} from "../../constants";
import {Navbar} from '../Navbar/Navbar';
import {Links} from "../Links/Links";

export const Resume = () => {
    return (
        <div>
            <div className="Header">
                <Navbar initialState={'Resume'}/>
            </div>
            <div className="Container">
                <div className="Resume">
                    <iframe title={'Resume'} src={GOOGLE_DOCS_EMBED_LINK_FOR_RESUME} scrolling="no"/>
                </div>
            </div>
            <Links/>
        </div>
    );
};
