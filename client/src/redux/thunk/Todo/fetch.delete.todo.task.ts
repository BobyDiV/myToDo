import { AnyAction } from '@reduxjs/toolkit';
import ITaskTodo, { RootState } from '../../../types/types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { deleteTodoTask } from '../../todo/todo.slice';

// TODO: Функция для удаления записи из списока дел
export const fetchDeleteTodoTasks =
  (oneTask: ITaskTodo): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      const response = await fetch(`/todo/${oneTask.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        dispatch(deleteTodoTask(oneTask));
      }
    } catch (error) {
      console.error('Ошибка удаления записи из базы данных!', error);
    }
  };

