import React, { useState } from 'react';
import './styles.scss';
import { SiGmail } from 'react-icons/si';

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <h3>DAVI RIBEIRO</h3>
        </div>

        <div className={`menu-links ${isSticky && 'is-Sticky'}`}>
          <a href="#about">About Me</a>
          <a href="#about">Projects</a>

          <button type="button">
            <SiGmail />
            Send a message
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
