import { TodoList } from '@/features/todo';
import { useAuth } from '@/lib/auth';
import { Button } from 'react-bootstrap';

export const Todo = () => {
  const auth = useAuth();
  if (!auth.user) return null;
  return (
    <div className={'container pt-5'}>
      <Button
        className={'mb-3 float-right'}
        variant='link'
        onClick={() => {
          auth.logout();
        }}
      >
        Log out
      </Button>
      <TodoList />
    </div>
  );
};
