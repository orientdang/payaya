import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { lazyImport } from '@/utils/lazyImport';
import { Spinner } from 'react-bootstrap';

const { Todo } = lazyImport(() => import('@/features/todo'), 'Todo');

const App = () => {
  return (
    <Suspense
      fallback={
        <div className='w-100 h-100'>
          <Spinner />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'todos', element: <Todo /> },
      { path: '', element: <Todo /> },
      { path: '*', element: <Navigate to='.' /> },
    ],
  },
];
