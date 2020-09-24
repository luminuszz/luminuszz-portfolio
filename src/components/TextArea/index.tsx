/* eslint-disable jsx-a11y/label-has-associated-control */
import { useField } from '@unform/core';
import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import './styles.scss';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, ...props }) => {
  const textArea = useRef<HTMLTextAreaElement>(null);

  const { defaultValue, registerField, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textArea.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div className="field text-area-block">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className="control">
        <textarea
          defaultValue={defaultValue}
          ref={textArea}
          name={name}
          {...props}
          className="textarea"
        />
      </div>
    </div>
  );
};

export default TextArea;
