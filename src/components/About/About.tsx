import '../../App.css';
import './About.css';
import * as React from 'react';
import { CLEAN_CODE_LINK } from '../../constants';
import Headshot from '../../images/headshot.jpg';
import { Links } from '../Links/Links';
import { Navbar } from '../Navbar/Navbar';

export const About = () => {
  return (
    <div>
      <div className="Header">
        <Navbar initialState={'About'} />
      </div>
      <div className="Container">
        <div className="About">
          <section>
            <div>
              <img src={Headshot} alt="Headshot" />
              <p>
                I am a self-taught programmer who loves automating tasks and learning new technologies. As a strong advocate of test-driven
                development and pair-programming, I strive to write software guided by the principles of{' '}
                <a href={CLEAN_CODE_LINK} target={'_blank'} rel={'noopener noreferrer'}>
                  clean code
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
      <Links />
    </div>
  );
};
