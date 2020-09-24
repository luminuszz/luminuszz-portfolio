import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef } from 'react';

import Input from '../Input';

// import { Container } from './styles';

const FormSection: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <Form
            ref={formRef}
            onSubmit={() => {
              console.log('teste');
            }}
          >
            <Input name="Nome" />
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
