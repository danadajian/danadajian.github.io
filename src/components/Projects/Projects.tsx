import './Projects.css';
import * as React from 'react';
import { GITHUB_LINK } from '../../constants';
import { Links } from '../Links/Links';
import { Navbar } from '../Navbar/Navbar';

export const Projects = () => {
  return (
    <div>
      <div className="Header">
        <Navbar initialState={'Projects'} />
      </div>
      <div className="Container">
        <div className="Projects">
          <section>
            <div>
              <h3>
                Project overviews coming soon! In the meantime, check out my{' '}
                <a href={GITHUB_LINK} target={'_blank'} rel={'noopener noreferrer'}>
                  GitHub
                </a>
                .
              </h3>
            </div>
          </section>
        </div>
      </div>
      <Links />
    </div>
  );
};
