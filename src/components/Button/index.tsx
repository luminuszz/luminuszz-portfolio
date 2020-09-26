/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes } from 'react';

import './styles.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasIcon?: boolean;
  hasLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  hasIcon,
  hasLoading,
  children,
  ...props
}) => {
  return (
    <button
      className={`${hasIcon ? 'button button-withIcon ' : ' button '}${
        hasLoading ? ' is-loading' : ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
