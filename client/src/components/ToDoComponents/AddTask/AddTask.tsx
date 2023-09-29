import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { TextField } from '@mui/material';

import './AddTask.css';
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { INewTask } from '../../../types/types';
import { fetchAddTodoTasks } from '../../../redux/thunk/Todo/fetch.add.todo.task';

export default function AddTask(): JSX.Element {
  const dispatch = useAppDispatch();

  const [taskBody, setTaskBody] = useState<string>('');

  const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskBody(e.target.value);
  }, []);

  const addNewTask = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      const newTask: INewTask = {
        todo: taskBody,
        check: false,
        userId: 1,
      };

      dispatch(fetchAddTodoTasks(newTask));
      setTaskBody('');
    },
    [dispatch, taskBody]
  );

  return (
    <div className="todoform">
      <form onSubmit={addNewTask}>
        <TextField
          id="outlined-basic"
          name="taskBody"
          value={taskBody}
          onChange={inputHandler}
          label="Планируйте свои дела..."
          variant="outlined"
          color="success"
          focused
          required
        />
        <Button
          type="submit"
          className="addBtn"
          variant="contained"
          color="success"
          size="medium"
          startIcon={<AddTaskIcon />}
          endIcon={<SendIcon />}
        >
          Добавить
        </Button>
      </form>
    </div>
  );
}
