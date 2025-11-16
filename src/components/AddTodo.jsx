import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const { todo, setTodo, input, setInput } = addTodo;

  const addTask = (e) => {
    e.preventDefault();
    setTodo((prevTodo) => [
      ...prevTodo,
      { id: Date.now(), title: input, isCompleted: false },
    ]);
    setInput("");
  };

  return (
    <div>
      <h1 className="text-4xl text-center mb-3 font-semibold">Add Todo</h1>
      <form onSubmit={addTask} className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter a task"
          className="flex-1 border p-2 rounded"
        />

        <button className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
          Add
        </button>
      </form>
    </div>
  );
}
