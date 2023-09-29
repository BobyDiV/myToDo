import { AnyAction } from '@reduxjs/toolkit';
import { INewTask, RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { addTodoTask } from '../../todo/todo.slice';

// TODO: Функция для добавления записи в список дел
export const fetchAddTodoTasks =
  (newTask: INewTask): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch('/todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(addTodoTask(data));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
