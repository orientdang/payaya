import { useRoutes } from 'react-router-dom';
import { Landing } from '@/component/Landing';

import { useAuth } from '@/lib/auth';
import { protectedRoutes } from '@/routes/protected';
import { publicRoutes } from '@/routes/public';

export const AppRoutes = () => {
  const auth = useAuth();

  const commonRoutes = [{ path: '/', element: <Landing /> }];

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return element;
};
