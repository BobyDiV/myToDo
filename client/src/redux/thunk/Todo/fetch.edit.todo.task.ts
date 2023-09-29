import { AnyAction } from '@reduxjs/toolkit';
import { INewTask, RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { editTodoTask } from '../../todo/todo.slice';

// TODO: Функция для изменения формулировки планируемого дела
export const fetchEditTodoTasks =
  (editOneTask: INewTask): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch('/todo', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editOneTask),
        credentials: 'include',
      });
      if (response.ok) {
        dispatch(editTodoTask(editOneTask));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
