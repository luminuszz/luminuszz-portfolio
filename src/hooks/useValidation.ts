/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormHandles, SubmitHandler, FormHelpers } from '@unform/core';
import { RefObject, useCallback, useState } from 'react';
import * as Yup from 'yup';

export type onSuccessType<T> = (data: T, helpers: FormHelpers) => void;

interface UseValidateDataProps<T> {
  formRef: RefObject<FormHandles>;
  schema: Yup.ObjectSchema;
  onSuccess: onSuccessType<T>;
}

type HookReturn = <T>(
  params: UseValidateDataProps<T>,
) => { loading: boolean; handleSubmit: SubmitHandler<T> };

interface Errors {
  [key: string]: string;
}

const useValidate: HookReturn = ({ formRef, onSuccess, schema }) => {
  const [loading, setLoading] = useState(false);

  const success = useCallback(onSuccess, []);

  const handleSubmit: SubmitHandler = useCallback(
    async (formData, helpers) => {
      formRef.current?.setErrors({});

      try {
        setLoading(true);
        const validatedData: any = await schema.validate(formData, {
          abortEarly: false,
        });

        success(validatedData, helpers);
      } catch (error) {
        const validationsErrors: Errors = {};

        if (error instanceof Yup.ValidationError) {
          error.inner.forEach(currentError => {
            validationsErrors[currentError.path] = currentError.message;
          });

          formRef.current?.setErrors(validationsErrors);
        }
      } finally {
        setLoading(false);
      }
    },
    [formRef, schema, success],
  );

  return { loading, handleSubmit };
};

export default useValidate;
