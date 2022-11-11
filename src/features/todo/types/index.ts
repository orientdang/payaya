export type Task = {
  _id: string;
  completed: boolean;
  description: string;
};
export type Tasks = {
  count: number;
  data: Task[];
};
