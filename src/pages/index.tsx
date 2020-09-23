/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import React, { useEffect, useRef } from 'react';
import { FaReact } from 'react-icons/fa';
import { GrNode } from 'react-icons/gr';

import profile from '../assets/profile.jpeg';
import handleAnimationWord from '../utils/handleAnimationWord';

const Home: NextPage = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    handleAnimationWord(textRef);
  }, [textRef]);

  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <p className="content is-family-primary ">
                    <span className="is-size-4 animation-bar " ref={textRef}>
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
                  <p className="my-1"> - I'm a full stack developer </p>
                  <p className="my-1 is-flex is-vcentered">
                    React , React Native, Nodejs
                    <FaReact className="mx-3" />
                    <GrNode />
                  </p>
                  <span />
                </div>
              </div>

              <div className="level-right">
                <figure className="image">
                  <img className="rounded" src={profile} alt="Profile" />
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
              <h3 className="has-text-white">About me</h3>
            </div>
            <div className="description-about">
              <p className="is-size-4 is-family-secondary has-text-centered">
                Web and mobile developer passionate about javascript and full of
                good stories and good coffee: 3
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
