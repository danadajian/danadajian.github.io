import './Navbar.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { RESUME_DOWNLOAD_LINK } from '../../constants';

export const Navbar = (props: { initialState: string }) => {
  const [selectedButton] = React.useState(props.initialState);

  const classNames: { [key: string]: string } = {
    [selectedButton]: 'Selected'
  };

  return (
    <div className="Navbar">
      <Link className={classNames.Home ?? 'Unselected'} to="/">
        Home
      </Link>
      <Link className={classNames.About ?? 'Unselected'} to="/about">
        About Me
      </Link>
      <div className="Resume">
        <Link className={classNames.Resume ?? 'Unselected'} to="/resume">
          Resume
        </Link>
        <a id={'download-pdf'} className="Resume-dropdown" href={RESUME_DOWNLOAD_LINK}>
          Download PDF
        </a>
      </div>
      <Link className={classNames.Projects ?? 'Unselected'} to="/projects">
        Projects
      </Link>
    </div>
  );
};
