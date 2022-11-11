import { useMutation } from 'react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Task, Tasks } from '../types';

export type UpdateTaskDTO = {
  id: string;
  completed: boolean;
};

export const updateTask = ({ id, completed }: UpdateTaskDTO): Promise<Task> => {
  return axios.put(`/task/${id}`, {
    completed,
  });
};

type UseUpdateTaskOptions = {
  config?: MutationConfig<typeof updateTask>;
};

const keyGetTasks = 'tasks';
export const useUpdateTask = ({ config }: UseUpdateTaskOptions = {}) => {
  return useMutation({
    onMutate: async (updatedTask) => {
      await queryClient.cancelQueries(keyGetTasks);

      const previousDiscussions = queryClient.getQueryData<Tasks>(keyGetTasks);
      console.log('update', updatedTask);

      queryClient.setQueryData(keyGetTasks, {
        ...previousDiscussions,
        data: previousDiscussions?.data?.map((task) => {
          if (task._id === updatedTask.id) {
            return {
              ...task,
              completed: updatedTask.completed,
            };
          }
          return task;
        }),
      });

      return { previousDiscussions };
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
    mutationFn: updateTask,
  });
};
