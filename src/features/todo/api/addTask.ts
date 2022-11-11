import { useMutation } from 'react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Task } from '../types';

export type CreateDiscussionDTO = {
  data: {
    description: string;
  };
};

export const createTask = ({ data }: CreateDiscussionDTO): Promise<Task> => {
  return axios.post(`/task`, data);
};

type UseCreateTaskOptions = {
  config?: MutationConfig<typeof createTask>;
};

const keyGetTasks = 'tasks';
export const useCreateTask = ({ config }: UseCreateTaskOptions = {}) => {
  return useMutation({
    onError: (_, __, context: any) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(keyGetTasks, context.previousTasks);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keyGetTasks);
    },
    ...config,
    mutationFn: createTask,
  });
};
