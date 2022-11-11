import { useCreateTask, useTask } from '@/features/todo';
import { FormContainer } from '@/component/Form';
import { Button, Spinner } from 'react-bootstrap';
import * as z from 'zod';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useDeleteTask } from '@/features/todo/api/deleteTask';
import LoadingOverlay from 'react-loading-overlay';

const schema = z.object({
  description: z.string().min(1),
});

type TodoValues = {
  description: string;
};

export const TodoList = () => {
  const [parent] = useAutoAnimate<HTMLUListElement>(/* optional config */);

  const tasksQuery = useTask();
  const deleteTaskMutation = useDeleteTask();

  const createTaskMutation = useCreateTask();

  const { data } = tasksQuery;

  const onCheck = (id: string, completed: boolean) => {
    console.log(id, completed);
  };

  const onRemove = (id: string) => {
    deleteTaskMutation.mutate({ id });
  };

  const onSubmit = async (values: TodoValues) => {
    await createTaskMutation.mutate({ data: values });
  };

  return (
    <>
      <FormContainer<TodoValues, typeof schema>
        className='mb-3 input-group'
        onSubmit={async (values) => {
          await onSubmit(values);
        }}
        schema={schema}
      >
        {({ register }) => {
          return (
            <>
              <input
                className='form-control'
                placeholder="I'm going to..."
                {...register('description')}
              />
              <Button type={'submit'} className='btn btn-primary'>
                Add
              </Button>
            </>
          );
        }}
      </FormContainer>
      <LoadingOverlay
        active={createTaskMutation?.isLoading || tasksQuery.isLoading}
        spinner
        styles={{
          overlay: (base: any) => ({
            ...base,
            background: '#c6c7c8',
            opacity: 0.3,
          }),
        }}
      >
        <ul className='list-group' ref={parent}>
          {data?.data.map((todo) => (
            <li
              key={todo._id}
              className='list-group-item'
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <input
                className='form-check-input me-3'
                type='checkbox'
                checked={todo.completed}
                onChange={() => onCheck(todo._id, !todo.completed)}
              />
              <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.description}
              </span>
              <Button variant={'danger'} onClick={() => onRemove(todo._id)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </LoadingOverlay>
    </>
  );
};
