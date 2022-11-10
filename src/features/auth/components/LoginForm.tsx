import * as z from 'zod';
import { useAuth } from '@/lib/auth';
import { Button, Form } from 'react-bootstrap';
import { FormContainer } from '@/component/Form';

const schema = z.object({
  email: z.string().email().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});

type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { login, isLoggingIn } = useAuth();

  return (
    <FormContainer<LoginValues, typeof schema>
      onSubmit={(values) => {
        login(values);
        onSuccess();
      }}
      schema={schema}
    >
      {({ register, formState }) => (
        <>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control placeholder='Enter email' {...register('email')} />
            {formState.errors['email']?.message && (
              <Form.Text className='text-danger'>{formState.errors['email']?.message}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' {...register('password')} />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
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
