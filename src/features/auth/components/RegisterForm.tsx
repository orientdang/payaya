import * as React from 'react';
import * as z from 'zod';
import { useAuth } from '@/lib/auth';
import { ErrorMessage, FormContainer } from '@/component/Form';
import { Button, Form } from 'react-bootstrap';

const schema = z.object({
  email: z.string().min(1, 'Required'),
  name: z.string().min(1, 'Required'),
  age: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: 'Expected number, received a string',
  }),
  password: z.string().min(7, 'Required'),
});

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
      onSubmit={async (values) => {
        await register(values);
        onSuccess();
      }}
      schema={schema}
    >
      {({ register, formState }) => (
        <>
          {console.log('form', formState.errors)}
          <Form.Group className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control placeholder='Enter email' {...register('email')} />
            <ErrorMessage message={formState.errors['email']?.message} />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' {...register('password')} />
            <ErrorMessage message={formState.errors['password']?.message} />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder='Name' {...register('name')} />
            <ErrorMessage message={formState.errors['name']?.message} />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Age</Form.Label>
            <Form.Control type={'number'} placeholder='Age' {...register('age')} />
            <ErrorMessage message={formState.errors['age']?.message} />
          </Form.Group>
          <Button type={'submit'} variant='primary'>
            Submit
          </Button>
        </>
      )}
    </FormContainer>
  );
};
