import * as React from 'react';
import * as z from 'zod';
import { useAuth } from '@/lib/auth';
import { FormContainer } from '@/component/Form';
import { Button, Form } from 'react-bootstrap';

const schema = z
  .object({
    email: z.string().min(1, 'Required'),
    firstName: z.string().min(1, 'Required'),
    lastName: z.string().min(1, 'Required'),
    password: z.string().min(1, 'Required'),
  })
  .and(
    z
      .object({
        teamId: z.string().min(1, 'Required'),
      })
      .or(z.object({ teamName: z.string().min(1, 'Required') })),
  );

type RegisterValues = {
  email: string;
  password: string;
  name: string;
  age: number;
};

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const { register, isRegistering } = useAuth();

  return (
    <FormContainer<RegisterValues, typeof schema>
      onSubmit={(values) => {
        register(values);
        onSuccess();
      }}
      schema={schema}
    >
      {({ register, formState }) => (
        <>
          <Form.Group className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control placeholder='Enter email' {...register('email')} />
            {formState.errors['email']?.message && (
              <Form.Text className='text-danger'>{formState.errors['email']?.message}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' {...register('password')} />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <Button type={'submit'} variant='primary'>
            Submit
          </Button>
        </>
      )}
    </FormContainer>
  );
};
