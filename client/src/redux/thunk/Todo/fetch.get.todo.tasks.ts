import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetTodoTasks } from './tasks.api';

/**
 *  В качестве параметра функции fetchGetTodoTasks должен быть передан id Юзера.
 *  Так как, статус юзера в store не обрабатывается передаем id=1
 *  ! указан в функции ниже. см. костыль
 */


export const getTasks = createAsyncThunk(
  'todoTask/fetchGetTodoTasks',
  async () => {
    //! костыль
    const responce = await fetchGetTodoTasks(1);
    return responce;
  }
);
