import * as z from 'zod';
import { useAuth } from '@/lib/auth';
import { Button, Form } from 'react-bootstrap';
import { FormContainer } from '@/component/Form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <FormContainer<LoginValues, typeof schema>
      onSubmit={async (values) => {
        try {
          const result = await login(values);
          console.log('result', result);
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
            {formState.errors['password']?.message && (
              <Form.Text className='text-danger'>{formState.errors['password']?.message}</Form.Text>
            )}
          </Form.Group>
          <Button type={'submit'} variant='primary'>
            Submit
          </Button>
          <Button variant={'link'} onClick={() => navigate('/register')}>
            Go to Registration
          </Button>
        </>
      )}
    </FormContainer>
  );
};
