import { useMutation } from 'react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Task, Tasks } from '../types';

export type DeleteTaskDTO = {
  id: string;
};

export const deleteTask = ({ id }: DeleteTaskDTO): Promise<Task> => {
  return axios.delete(`/task/${id}`);
};

type UseDeleteTaskOptions = {
  config?: MutationConfig<typeof deleteTask>;
};

const keyGetTasks = 'tasks';
export const useDeleteTask = ({ config }: UseDeleteTaskOptions = {}) => {
  return useMutation({
    onMutate: async (deletedDiscussion) => {
      await queryClient.cancelQueries(keyGetTasks);

      const previousDiscussions = queryClient.getQueryData<Tasks>(keyGetTasks);

      queryClient.setQueryData(keyGetTasks, {
        ...previousDiscussions,
        data: previousDiscussions?.data?.filter(
          (discussion) => discussion._id !== deletedDiscussion.id,
        ),
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
    mutationFn: deleteTask,
  });
};
