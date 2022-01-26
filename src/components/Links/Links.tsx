import './Links.css';
import * as React from 'react';
import { GITHUB_LINK, LINKED_IN_LINK } from '../../constants';
import GitHub from '../../images/github.svg';
import LinkedIn from '../../images/linkedin.svg';

export const Links = () => {
  return (
    <div className="Links">
      <a href={LINKED_IN_LINK} target={'_blank'} rel={'noopener noreferrer'}>
        <img src={LinkedIn} alt={'LinkedIn'} />
      </a>
      <a href={GITHUB_LINK} target={'_blank'} rel={'noopener noreferrer'}>
        <img src={GitHub} alt={'GitHub'} />
      </a>
    </div>
  );
};
