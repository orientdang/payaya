import { Form } from 'react-bootstrap';
import * as React from 'react';

type ErrorMessageType = {
  message?: string;
};
export const ErrorMessage = ({ message }: ErrorMessageType) => {
  if (message) {
    return <Form.Text className='text-danger'>{message}</Form.Text>;
  }
  return null;
};
