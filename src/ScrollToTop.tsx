import * as React from 'react';
import { useEffect } from 'react';

interface ScrollToTopProps {
  children: any;
}

export const ScrollToTop: React.FunctionComponent<ScrollToTopProps> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return children;
};
