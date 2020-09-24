import React from 'react';

import './styles.scss';

export interface Props {
  visibility?: number;
  text?: string;
}

const Loading: React.FC<Props> = ({ visibility, text }) => {
  return visibility ? <div className="spinner" /> : <span>{text}</span>;
};

export default Loading;
