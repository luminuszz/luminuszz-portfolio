/* eslint-disable jsx-a11y/label-has-associated-control */
import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { defaultValue, registerField, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {name}
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
    </div>
  );
};

export default Input;
