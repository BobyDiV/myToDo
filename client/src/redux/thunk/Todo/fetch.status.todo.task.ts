import { AnyAction } from '@reduxjs/toolkit';
import ITaskTodo, { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { changeCheckStatus } from '../../todo/todo.slice';

// TODO: функция для отметки/отмены статуса о выполнения
export const fetchChangeExecutionStatus =
  (selectTask: ITaskTodo): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/todo/status/${selectTask.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectTask),
        credentials: 'include',
      });
      if (response.ok) {
        dispatch(changeCheckStatus(selectTask));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
