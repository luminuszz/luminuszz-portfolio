import React, { ButtonHTMLAttributes } from 'react';

import './styles.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ hasIcon, children, ...props }) => {
  return (
    <button
      className={hasIcon ? 'button button-withIcon' : 'button'}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
