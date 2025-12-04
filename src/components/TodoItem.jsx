import { useDispatch } from "react-redux";
import {
  removeTodo,
  toggleComplete,
  editTodo,
} from "../features/todos/todoSlice";
import { useState } from "react";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(todo.title);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    dispatch(editTodo({ title, id: todo.id }));
    setIsEditing(false);
  };

  return (
    <li
      className={`flex items-center justify-between shadow p-2 rounded ${
        todo.completed && "bg-green-200"
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleComplete(todo.id))}
        className="w-4 h-4 accent-blue-500"
      />

      {isEditing ? (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-1 rounded w-full mx-2"
        />
      ) : (
        <span
          className={`w-full mx-2 ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {title}
        </span>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-500 text-white rounded cursor-pointer"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-orange-500 text-white rounded cursor-pointer"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
