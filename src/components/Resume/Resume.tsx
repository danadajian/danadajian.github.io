import './Resume.css';
import * as React from 'react';
import { GOOGLE_DOCS_EMBED_LINK_FOR_RESUME } from '../../constants';
import { Links } from '../Links/Links';
import { Navbar } from '../Navbar/Navbar';

export const Resume = () => {
  return (
    <div>
      <div className="Header">
        <Navbar initialState={'Resume'} />
      </div>
      <div className="Container">
        <div className="Resume">
          <iframe title={'Resume'} src={GOOGLE_DOCS_EMBED_LINK_FOR_RESUME} />
        </div>
      </div>
      <Links />
    </div>
  );
};
