/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import React, { useEffect, useRef } from 'react';
import { DiMongodb, DiPostgresql } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { GrNode } from 'react-icons/gr';
import { SiTypescript } from 'react-icons/si';

import profile from '../assets/profile.jpeg';
import Footer from '../components/Footer';
import handleAnimationWord from '../utils/handleAnimationWord';

const Home: NextPage = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    handleAnimationWord(textRef);
  }, [textRef]);

  return (
    <>
      <section className="hero section-main">
        <div className="hero-body">
          <div className="container">
            <div className="level">
              <div className="level-left">
                <div className="level-item has-text-centered-mobile ">
                  <p className="content is-family-primary is-size-3-mobile is-size-4-desktop ">
                    <span
                      className="is-size-4-mobile is-size-4-desktop animation-bar  has-text-centered-mobile"
                      ref={textRef}
                    >
                      Hi, I'm Davi Ribeiro (luminuszz)
                    </span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://camo.githubusercontent.com/35d3d11359a49bf12aebb834cc13fd81b95eff4e/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
                    >
                      <img
                        src="https://camo.githubusercontent.com/35d3d11359a49bf12aebb834cc13fd81b95eff4e/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
                        width="30px"
                        data-canonical-src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                        alt="gif"
                      />
                    </a>
                  </p>
                  <p className="my-1 is-size-4-mobile is-size-4-desktop has-text-centered-mobile">
                    - I'm a full stack developer
                  </p>
                  <p className="my-1 is-flex is-vcentered is-size-5-desktop  is-size-4-mobile is-size-4-desktop has-text-centered-mobile">
                    React , React Native, Nodejs
                    <FaReact className="mx-3" />
                    <GrNode />
                  </p>
                  <span />
                </div>
              </div>

              <div className="level-right">
                <figure className="image">
                  <img className="is-rounded" src={profile} alt="Profile" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero section-about mt-6">
        <div className="hero-body">
          <div className="container">
            <div className="title has-text-centered">
              <h3 className="has-text-white is-size-4 is-size-2-mobile is-size-3-tablet">
                About me
              </h3>
            </div>
            <div className="description-about">
              <p className="is-size-5 is-size-4-tablet is-size-4-mobile is-family-secondary has-text-centered has-text-justify-tablet ">
                Web and mobile developer passionate about javascript and full of
                good stories and good coffee: 3
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hero section-stack mt-6">
        <div className="hero-body">
          <div className="container">
            <div className="title has-text-centered">
              <h3 className="has-text-white  is-size-3 is-size-2-tablet is-size-2-mobile">
                My Stack
              </h3>
            </div>
            <div className="columns is-centered is-vcentered is-multiline mt-6 is-family-secondary">
              <div className="column is-2 is-4-tablet">
                <FaReact />
                <h3 className="is-size-4 has-text-white hat-has-text-weight-medium mt-4 ">
                  React.js
                </h3>
              </div>
              <div className="column is-2 is-4-tablet">
                <GrNode />
                <h3 className="is-size-4 has-text-white hat-has-text-weight-medium mt-4 ">
                  Node.js
                </h3>
              </div>
              <div className="column is-2 is-4-tablet">
                <FaReact />
                <h3 className="is-size-4 has-text-white hat-has-text-weight-medium mt-4 ">
                  React Native
                </h3>
              </div>
              <div className="column is-2 is-4-tablet">
                <DiMongodb />
                <h3 className="is-size-4 has-text-white hat-has-text-weight-medium mt-4 ">
                  MongoDB
                </h3>
              </div>
              <div className="column is-2 is-4-tablet">
                <DiPostgresql />
                <h3 className="is-size-4 has-text-white hat-has-text-weight-medium mt-4 ">
                  PostgreSQL
                </h3>
              </div>
              <div className="column is-2 is-4-tablet">
                <SiTypescript />
                <h3 className="is-size-4 has-text-white hat-has-text-weight-medium mt-4 ">
                  Typescript
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
