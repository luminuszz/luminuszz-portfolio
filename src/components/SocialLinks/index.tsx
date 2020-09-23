import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';

import './styles.scss';

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/davi-ribeiro-daviribeiro/">
        <AiOutlineLinkedin />
      </a>
      <a href="https://twitter.com/luminuszz1">
        <FiTwitter />
      </a>
      <a href="https://github.com/luminuszz">
        <VscGithubAlt />
      </a>
    </div>
  );
};

export default SocialLinks;
