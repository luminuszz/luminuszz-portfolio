/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from 'next-translate';
import Link from 'next-translate/Link';
import NextLink from 'next/link';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import './styles.scss';
import { allLanguages } from '../../../i18n.json';
import {
  GiHamburgerMenu,
  SiGmail,
  BsArrowLeft,
  FaLanguage,
} from '../../assets/icons';

const Navbar: React.FC = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const { t, lang } = useTranslation();

  const handleNavBarSticky = useCallback(() => {
    setIsSticky(window.pageYOffset > headerRef.current?.offsetTop);
  }, [headerRef]);

  useEffect(() => {
    window.addEventListener('scroll', handleNavBarSticky);
  }, [handleNavBarSticky]);

  const handleControlNavbar = useCallback(() => {
    setOpenNav(state => !state);
    document.querySelector('body').classList.toggle('removeScroll', !openNav);
  }, [openNav]);

  const formattedLang = useMemo(() => {
    return allLanguages.filter(currentLang => currentLang !== lang);
  }, [lang]);

  return (
    <>
      <header ref={headerRef} className={`${isSticky && 'is-Sticky'}`}>
        <div className="header-content">
          <div className="logo is-flex ">
            <GiHamburgerMenu
              className="is-hidden-desktop"
              onClick={handleControlNavbar}
            />
            <a href="#main" className="logo-name">
              <h3>DAVI RIBEIRO</h3>
            </a>
          </div>

          <div className="menu-links  is-hidden-mobile">
            <a href="#about">{t('common:components.navbar.links.about')}</a>
            <a href="#stack">{t('common:components.navbar.links.stack')}</a>
            <a href="#contact">{t('common:components.navbar.links.contact')}</a>
            <NextLink href="/blog">
              <a>{t('common:components.navbar.links.blog')}</a>
            </NextLink>

            <a
              className="mailto"
              href="mailto:davi5.ribeiro.contanto@gmail.com?subject='Olá'"
            >
              <SiGmail />
              {t('common:components.navbar.navButton')}
            </a>

            <a href="#a" className="lang">
              <FaLanguage />
            </a>
            {formattedLang.map(currentLang => (
              <Link lang={currentLang} key={currentLang} href="/">
                <a className="is-uppercase lang-display ">{currentLang}</a>
              </Link>
            ))}
          </div>
        </div>

        <div
          className={
            openNav ? 'menu-mobile  active' : 'menu-mobile  is-hidden-desktop'
          }
        >
          <div className="exit-icon">
            <BsArrowLeft onClick={handleControlNavbar} />
          </div>

          <div className="menu-links is-hidden-desktop">
            <a href="#about">About Me</a>
            <a href="#about">{t('common:navbar.links.stack')}</a>
            <a
              className="mailto"
              href="mailto:davi5.ribeiro.contanto@gmail.com?subject='Olá'"
            >
              <SiGmail />
              Send a message
            </a>
            {formattedLang.map(currentLang => (
              <Link lang={currentLang} key={currentLang} href="/">
                <a className="is-uppercase lang-display ">{currentLang}</a>
              </Link>
            ))}
          </div>
        </div>
      </header>
      {openNav && <div className="set-opacity" />}
    </>
  );
};

export default Navbar;
