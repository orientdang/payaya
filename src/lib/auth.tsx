import { initReactQueryAuth } from 'react-query-auth';
import {
  AuthUser,
  getUser,
  LoginCredentialsDTO,
  loginWithEmailAndPassword,
  RegisterCredentialsDTO,
  registerWithEmailAndPassword,
  UserResponse,
} from '@/features/auth';
import storage from '@/utils/storage';
import { Spinner } from 'react-bootstrap';

async function handleUserResponse(data: UserResponse) {
  const { token, user } = data;
  storage.setToken(token);
  return user;
}

async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return (
      <div className='w-100 h-100'>
        <Spinner />
      </div>
    );
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  AuthUser | null,
  unknown,
  LoginCredentialsDTO,
  RegisterCredentialsDTO
>(authConfig);
