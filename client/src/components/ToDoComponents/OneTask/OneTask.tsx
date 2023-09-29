import React from 'react';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

import ITaskTodo from '../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { selectTask } from '../../../redux/todo/todo.slice';

import { InputOrChangeIsToggle } from '../../../redux/todo/todo.inputorchange.slice';
import { inputOrChangeTask } from '../../../redux/todo/todo.inputorchange.selectors';
import { oneSelectedTask } from '../../../redux/todo/todo.selectors';
import { fetchDeleteTodoTasks } from '../../../redux/thunk/Todo/fetch.delete.todo.task';
import { fetchChangeExecutionStatus } from '../../../redux/thunk/Todo/fetch.status.todo.task';

import './OneTask.css';

export default function OneTask({
  el,
  ind,
}: {
  el: ITaskTodo;
  ind: number;
}): JSX.Element {
  const dispatch = useAppDispatch();

  const inputOrUpdateTask = useAppSelector(inputOrChangeTask);
  const selectedTask = useAppSelector(oneSelectedTask);

  return (
    <div className="todocard">
      <div className={el.check ? 'done' : ''}>
        <span className="tasknumber">{ind + 1}</span>
        <span className="tasktext"> {el.todo}</span>
      </div>
      <div className="btnblock">
        <div>
          <span
            title="Изменить статус выполнения"
            onClick={() => {
              if (
                !inputOrUpdateTask ||
                (inputOrUpdateTask && el.id !== selectedTask.id)
              ) {
                dispatch(fetchChangeExecutionStatus(el));
              }
            }}
            aria-label="done"
          >
            <CheckCircleOutlineRoundedIcon color="success" />
          </span>
          {!el.check && (
            <span
              title="Изменить формулировку"
              onClick={() => {
                if (!inputOrUpdateTask) {
                  dispatch(InputOrChangeIsToggle());
                  dispatch(selectTask(el));
                } else {
                  dispatch(InputOrChangeIsToggle());
                }
              }}
              aria-label="edit"
            >
              <CreateRoundedIcon color="warning" />
            </span>
          )}
          <span
            title="Удалить из списка"
            onClick={() => dispatch(fetchDeleteTodoTasks(el))}
            aria-label="delete"
          >
            <HighlightOffRoundedIcon color="error" />
          </span>
        </div>
      </div>
    </div>
  );
}
