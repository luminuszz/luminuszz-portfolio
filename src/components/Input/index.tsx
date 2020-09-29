/* eslint-disable jsx-a11y/label-has-associated-control */
import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import './styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { defaultValue, registerField, fieldName, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div className="field input-area-block">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className="control">
        <input
          defaultValue={defaultValue}
          ref={inputRef}
          name={name}
          {...props}
          className="input"
          type="text"
          placeholder=""
        />
      </div>
      {error && <span className="error-span">{error}</span>}
    </div>
  );
};

export default Input;
