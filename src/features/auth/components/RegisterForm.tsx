import * as React from 'react';
import * as z from 'zod';
import { useAuth } from '@/lib/auth';
import { ErrorMessage, FormContainer } from '@/component/Form';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
  const navigate = useNavigate();

  return (
    <FormContainer<RegisterValues, typeof schema>
      onSubmit={async (values) => {
        try {
          await register(values);
          onSuccess();
        } catch (e) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          toast.error(e?.response?.data);
        }
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
          <Button variant={'link'} onClick={() => navigate('/login')}>
            Go to Login
          </Button>
        </>
      )}
    </FormContainer>
  );
};
