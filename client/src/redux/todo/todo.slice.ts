import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ITaskTodo, { stateTape } from '../../types/types';
import { getTasks } from '../thunk/Todo/fetch.get.todo.tasks';

const initialState: stateTape = {
  todoTasks: [],
  loading: false,
  selectedTask: {
    id: 0,
    todo: '',
    check: false,
    userId: 1,
  },
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodoTask: (state, action: PayloadAction<ITaskTodo>) =>
      (state = { ...state, todoTasks: [...state.todoTasks, action.payload] }),
    deleteTodoTask: (state, action: PayloadAction<ITaskTodo>) =>
      (state = {
        ...state,
        todoTasks: state.todoTasks.filter(
          (el): boolean => el.id !== action.payload.id
        ),
      }),
    changeCheckStatus: (state, action) =>
      (state = {
        ...state,
        todoTasks: state.todoTasks.map((el) =>
          el.id === action.payload.id ? { ...el, check: !el.check } : el
        ),
      }),
    editTodoTask: (state, action) =>
      (state = {
        ...state,
        todoTasks: state.todoTasks.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                id: action.payload.id,
                todo: action.payload.todo,
                check: action.payload.check,
                userId: action.payload.userId,
              }
            : el
        ),
      }),
    selectTask: (state, action) =>
      (state = {
        ...state,
        selectedTask: {
          id: action.payload.id,
          todo: action.payload.todo,
          check: action.payload.check,
          userId: action.payload.userId,
        },
      }),
    clearSelectTask: (state) =>
      (state = {
        ...state,
        selectedTask: {
          id: 0,
          todo: '',
          check: false,
          userId: 1,
        },
      }),
    clearTasksList: (state) => (state = { ...state, todoTasks: [] }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.todoTasks = [...action.payload];
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const {
  addTodoTask,
  deleteTodoTask,
  changeCheckStatus,
  editTodoTask,
  selectTask,
  clearTasksList,
  clearSelectTask,
} = todoSlice.actions;
export default todoSlice.reducer;
