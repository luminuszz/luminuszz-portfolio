import { motion, useViewportScroll } from 'framer-motion';
import React, { useState } from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import './styles.scss';

const SocialLinks: React.FC = () => {
  return (
    <motion.div>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/davi-ribeiro-daviribeiro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          href="https://twitter.com/luminuszz1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
        </a>
        <a
          href="https://github.com/luminuszz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithubAlt />
        </a>
      </div>
    </motion.div>
  );
};

export default SocialLinks;
