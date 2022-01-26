import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Projects } from './components/Projects/Projects';
import { Resume } from './components/Resume/Resume';
import { useEffect } from 'react';

export const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};
