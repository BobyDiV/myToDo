import React from 'react';
import ChangeTask from '../ChangeTask/ChangeTask';
import AddTask from '../AddTask/AddTask';
import TodoList from '../TodoList/TodoList';
import stylesMainTodo from './MainTodoPage.module.css';
import { useAppSelector } from '../../../redux/hooks/hooks';
import { inputOrChangeTask } from '../../../redux/todo/todo.inputorchange.selectors';

export default function MainTodoPage(): JSX.Element {
  const inputOrUpdateTask = useAppSelector(inputOrChangeTask);

  return (
    <div className={stylesMainTodo.maintodo}>
      {inputOrUpdateTask ? <ChangeTask /> : <AddTask />}
      <hr />
      <TodoList />
    </div>
  );
}
