import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/features/auth/components/LoginForm';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={'container pt-5'}>
      <LoginForm onSuccess={() => navigate('/app')} />
    </div>
  );
};
