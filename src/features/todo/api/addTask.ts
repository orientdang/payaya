import { useMutation } from 'react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Task, Tasks } from '../types';
import { nanoid } from 'nanoid';

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
    onMutate: async (newDiscussion) => {
      await queryClient.cancelQueries(keyGetTasks);

      // Create optimistic todo
      const optimisticTodo = {
        _id: nanoid(),
        description: newDiscussion.data.description,
        completed: false,
      };
      const previousTasks = queryClient.getQueryData<Tasks>(keyGetTasks);

      queryClient.setQueryData(keyGetTasks, {
        ...previousTasks,
        data: [...(previousTasks?.data || []), optimisticTodo],
      });

      return { previousTasks };
    },
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
