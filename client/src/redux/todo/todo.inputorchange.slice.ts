import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputOrChange: false,
};

const todoInputOrChangeSlice = createSlice({
  name: 'inputOrChange',
  initialState,
  reducers: {
    InputOrChangeIsToggle(state) {
      state.inputOrChange = !state.inputOrChange;
    },
  },
});

export const { InputOrChangeIsToggle } = todoInputOrChangeSlice.actions;

export default todoInputOrChangeSlice.reducer;
