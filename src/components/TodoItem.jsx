import { useState } from "react";

export default function TodoItem({
  title,
  uid,
  onDeleteTodo,
  onCompleteTodo,
  onEditTodo,
  onCompleted,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [todoTitle, setTodoTitle] = useState(title);

  return (
    <li
      onClick={() => onCompleteTodo(uid)}
      className={`flex items-center justify-between p-2 rounded cursor-pointer ${
        onCompleted ? "bg-green-400/40" : "bg-gray-100"
      }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={onCompleted}
        readOnly
        className="w-4 h-4 accent-blue-500"
      />

      {/* Task */}
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        onClick={(e) => isEditing && e.stopPropagation()}
        readOnly={!isEditing}
        className={`border p-1 outline-none w-full mx-2 bg-transparent rounded ${
          isEditing ? "outline-black/10" : "border-transparent cursor-pointer"
        }`}
      />

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();

            if (onCompleted) return;

            // if saving
            if (isEditing) {
              if (!todoTitle.trim().length) return; // prevent empty save
              onEditTodo(uid, todoTitle);
            }

            setIsEditing(!isEditing);
          }}
          className={`px-3 py-1 text-sm cursor-pointer text-white rounded-full
            ${
              isEditing
                ? "bg-green-500 hover:bg-green-400"
                : "bg-orange-500 hover:bg-orange-400"
            }`}
        >
          {isEditing ? "Save" : "Edit"}
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onDeleteTodo(uid);
          }}
          className="px-3 py-1 text-sm cursor-pointer bg-red-500 text-white rounded-full hover:bg-red-400"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
