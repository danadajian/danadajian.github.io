import '../../App.css';
import './Home.css';
import * as React from 'react';
import { Links } from '../Links/Links';
import { Navbar } from '../Navbar/Navbar';

export const Home = () => {
  return (
    <div className="Home">
      <div className="Overlay">
        <Navbar initialState={'Home'} />
        <h1>Dan Adajian</h1>
        <p>I'm a software developer from Chicago, IL.</p>
        <p>Welcome to my site!</p>
        <Links />
      </div>
    </div>
  );
};
