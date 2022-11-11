import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';

export const Register = () => {
  const navigate = useNavigate();

  return (
    <div className={'container pt-5'}>
      <RegisterForm onSuccess={() => navigate('/')} />
    </div>
  );
};
