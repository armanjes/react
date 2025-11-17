import { useState } from "react";

export default function AddTodoForm({ onAddTodo }) {
  const [input, setInput] = useState("");

  const hanldeSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    onAddTodo(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={hanldeSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        className="flex-1 border p-2 rounded"
      />

      <button className="bg-blue-500 text-white px-4 rounded cursor-pointer hover:bg-blue-600">
        Add
      </button>
    </form>
  );
}
