import { useRoutes } from 'react-router-dom';
import { Landing } from '@/component/Landing';

import { publicRoutes } from './public';
import { useAuth } from '@/lib/auth';

export const AppRoutes = () => {
  const auth = useAuth();

  const commonRoutes = [{ path: '/', element: <Landing /> }];

  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return element;
};
