import React from 'react';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="header-logo">
          <strong>tek</strong>
          <strong>company</strong>
        </div>
      </Link>
      <nav className="header-links">
        <a href="linkedin.com">
          <img src={linkedin} alt="creator of website's Linkedin page" />
        </a>
        <a href="twitter.com">
          <img src={twitter} alt="creator of website's Twitter page" />
        </a>
        <a href="github.com">
          <img src={github} alt="creator of website's Github page" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
