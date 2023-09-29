import { store } from '../redux/store/store';

export default interface ITaskTodo {
  id: number;
  todo: string;
  check: boolean;
  userId: number;
}


export interface INewTask {
  todo: string;
  check: boolean;
  userId: number;
}

export type stateTape = {
  todoTasks: ITaskTodo[];
  loading: boolean;
  selectedTask: ITaskTodo;
};

export type Props = {
  children: React.ReactNode;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
