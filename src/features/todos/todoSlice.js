import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [], // array of {id, title, completed}
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        title: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    editTodo: (state, action) => {
      const { id, title } = action.payload;
      state.todos.map((todo) => (todo.id === id ? { ...todo, title } : todo));
    },
  },
});

export const { addTodo, removeTodo, toggleComplete, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
