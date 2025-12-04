import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

export default function AddTodoForm() {
  const inputRef = useRef("")
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputRef.current.value.trim();
    if(!trimmed) return
    dispatch(addTodo(trimmed));
    inputRef.current.value = ""
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter a task"
        className="flex-1 border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded cursor-pointer hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}
