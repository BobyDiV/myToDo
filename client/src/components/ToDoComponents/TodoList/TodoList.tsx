import React, { memo, useEffect } from 'react';
import { CircularProgress, Box } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { getAllTasks } from '../../../redux/todo/todo.selectors';
import { getTasks } from '../../../redux/thunk/Todo/fetch.get.todo.tasks';

import ITaskTodo, { RootState } from '../../../types/types';

import OneTask from '../OneTask/OneTask';
import { clearTasksList } from '../../../redux/todo/todo.slice';

const TodoList = memo((): JSX.Element => {
  const dispatch = useAppDispatch();
  const todoTasks = useAppSelector(getAllTasks);
  const loading = useAppSelector((state: RootState) => state.todo.loading);

  useEffect(() => {
    dispatch(getTasks());
    dispatch({ type: '@INIT todoTascks' });

    return () => {
      dispatch(clearTasksList());
      dispatch({ type: '@DESTROY todoTascks' });
    };
  }, [dispatch]);

  return (
    <React.Fragment>
      <h3>JUST DO IT! / Просто сделай это!</h3>
      <br />
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <React.Fragment>
          {todoTasks?.length ? (
            todoTasks.map((el: ITaskTodo, ind: number) => (
              <React.Fragment key={el.id}>
                <OneTask el={el} ind={ind} />
              </React.Fragment>
            ))
          ) : (
            <h3 style={{ color: 'red' }}>Ничего не запланировано...</h3>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
});

export default TodoList;

