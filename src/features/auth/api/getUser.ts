import { axios } from '@/lib/axios';
import { AuthUser } from '@/features/auth';

export const getUser = (): Promise<AuthUser> => {
  return axios.get('/user/me');
};
