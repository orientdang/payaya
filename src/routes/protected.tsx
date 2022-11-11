import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { lazyImport } from '@/utils/lazyImport';

const { Todo } = lazyImport(() => import('@/features/todo'), 'Todo');

const App = () => {
  return (
    <Suspense
      fallback={<div className='h-full w-full flex items-center justify-center'>llllll</div>}
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
