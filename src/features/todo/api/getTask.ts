import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Tasks } from '../types';

export const apiGetTask = (): Promise<Tasks> => {
  return axios.get(`/task`);
};

type QueryFnType = typeof apiGetTask;

type UseTaskOption = {
  config?: QueryConfig<QueryFnType>;
};

export const useTask = ({ config }: UseTaskOption = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryFn: () => apiGetTask(),
    queryKey: ['tasks'],
    ...config,
  });
};
