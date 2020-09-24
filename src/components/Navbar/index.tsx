import React, { useCallback, useEffect, useRef, useState } from 'react';
import './styles.scss';
import { BsArrowLeft } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SiGmail } from 'react-icons/si';

const Navbar: React.FC = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleNavBarSticky = useCallback(() => {
    setIsSticky(window.pageYOffset > headerRef.current?.offsetTop);
  }, [headerRef]);

  useEffect(() => {
    window.addEventListener('scroll', handleNavBarSticky);
  }, [handleNavBarSticky]);

  const handleControlNavarbar = useCallback(() => {
    setOpenNav(state => !state);
    document.querySelector('body').classList.toggle('removeScroll', !openNav);
  }, [openNav]);

  return (
    <>
      <header ref={headerRef} className={`${isSticky && 'is-Sticky'}`}>
        <div className="header-content">
          <div className="logo is-flex ">
            <GiHamburgerMenu
              className="is-hidden-desktop"
              onClick={handleControlNavarbar}
            />
            <h3>DAVI RIBEIRO</h3>
          </div>

          <div className="menu-links  is-hidden-mobile">
            <a href="#about">About Me</a>
            <a href="#about">Stack</a>

            <a
              className="mailto"
              href="mailto:davi5.ribeiro.contanto@gmail.com?subject='Olá'"
            >
              <SiGmail />
              Send a message
            </a>
          </div>
        </div>

        <div
          className={
            openNav ? 'menu-mobile  active' : 'menu-mobile  is-hidden-desktop'
          }
        >
          <div className="exit-icon">
            <BsArrowLeft onClick={handleControlNavarbar} />
          </div>

          <div className="menu-links is-hidden-desktop">
            <a href="#about">About Me</a>
            <a href="#about">Stack</a>

            <a
              className="mailto"
              href="mailto:davi5.ribeiro.contanto@gmail.com?subject='Olá'"
            >
              <SiGmail />
              Send a message
            </a>
          </div>
        </div>
      </header>
      {openNav && <div className="set-opacity" />}
    </>
  );
};

export default Navbar;
