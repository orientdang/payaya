import { axios } from '@/lib/axios';
import { UserResponse } from '@/features/auth';

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  name: string;
  age: number;
};

export const registerWithEmailAndPassword = (
  data: RegisterCredentialsDTO,
): Promise<UserResponse> => {
  return axios.post('/user/register', data);
};
