import { RootState } from '../../types/types';

export const getAllTasks = (state: RootState) => state.todo.todoTasks;
export const oneSelectedTask = (state: RootState) => state.todo.selectedTask
