import React, { useCallback, useState } from 'react';

import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddTaskIcon from '@mui/icons-material/AddTask';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';

import { InputOrChangeIsToggle } from '../../../redux/todo/todo.inputorchange.slice';
import { oneSelectedTask } from '../../../redux/todo/todo.selectors';
import { fetchEditTodoTasks } from '../../../redux/thunk/Todo/fetch.edit.todo.task';

import ITaskTodo from '../../../types/types';

import './ChangeTask.css';
import { clearSelectTask } from '../../../redux/todo/todo.slice';

export default function ChangeTask(): JSX.Element {
  const dispatch = useAppDispatch();

  const selectedTask = useAppSelector(oneSelectedTask);

  const [changeTaskBody, setChangeTaskBody] = useState<string>(
    selectedTask.todo
  );

  const inputChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setChangeTaskBody(e.target.value);
    },
    []
  );

  const editTaskHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();

      const editTask: ITaskTodo = {
        id: selectedTask.id,
        todo: changeTaskBody,
        check: selectedTask.check,
        userId: selectedTask.userId,
      };

      dispatch(fetchEditTodoTasks(editTask));
      dispatch(clearSelectTask());
      setChangeTaskBody('');
      dispatch(InputOrChangeIsToggle());
    },
    [changeTaskBody, dispatch, selectedTask.check, selectedTask.id, selectedTask.userId]
  );

  return (
    <div className="updatetodoform">
      <form onSubmit={editTaskHandler}>
        <TextField
          id="outlined-basic"
          name="changeTaskBody"
          value={changeTaskBody}
          onChange={inputChangeHandler}
          label="Внесите изменение в формулировку..."
          variant="outlined"
          color="success"
          focused
          required
        />
        <Button
          type="submit"
          className="changeBtn"
          variant="contained"
          color="success"
          size="medium"
          startIcon={<AddTaskIcon />}
        >
          Изменить
        </Button>
        <Button
          className="exitBtn"
          variant="contained"
          color="warning"
          size="medium"
          endIcon={<SendIcon />}
          onClick={() => dispatch(InputOrChangeIsToggle())}
        >
          Отменить
        </Button>
      </form>
    </div>
  );
}
