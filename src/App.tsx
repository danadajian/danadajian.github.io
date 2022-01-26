import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Projects } from './components/Projects/Projects';
import { Resume } from './components/Resume/Resume';
import { ScrollToTop } from './ScrollToTop';

export const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </ScrollToTop>
  );
};
