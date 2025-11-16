import { useState } from "react";

export default function Todos({ todoArray }) {
  const { todo, setTodo } = todoArray;

  const deleteTask = (id) => {
    setTodo((prev) => prev.filter((t) => t.id !== id));
  };

  const editTask = (id, newTitle) => {
    setTodo((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title: newTitle } : item))
    );
  };

  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  return (
    <ul className="space-y-2">
      {!todo.length && <p className="text-center text-gray-500">No tasks</p>}

      {todo.map((item) => {
        const [isEditing, setIsEditing] = useState(false);
        const [tempTitle, setTempTitle] = useState(item.title);

        const handleEditClick = (e) => {
          e.stopPropagation();

          if (isEditing) {
            editTask(item.id, tempTitle);
          }

          setIsEditing((prev) => !prev);
        };

        return (
          <li
            key={item.id}
            onClick={() => toggleComplete(item.id)}
            className={`flex items-center justify-between bg-gray-100 p-2 rounded cursor-pointer ${
              item.isCompleted && "bg-green-200"
            }`}
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={item.isCompleted}
              readOnly
              className="w-4 h-4 accent-blue-500"
            />

            {/* Task */}
            <input
              type="text"
              value={isEditing ? tempTitle : item.title}
              onClick={e => e.stopPropagation()}
              onChange={(e) => setTempTitle(e.target.value)}
              disabled={!isEditing}
              className={`border outline-none w-full mx-2 bg-transparent rounded
                ${item.isCompleted ? "line-through" : ""}
                ${
                  isEditing
                    ? "p-2 border-black/10 bg-white"
                    : "border-transparent"
                }
              `}
            />

            {/* Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleEditClick}
                className="px-3 py-1 text-sm text-white rounded-full bg-orange-500 hover:bg-orange-400"
              >
                {isEditing ? "Save" : "Edit"}
              </button>

              <button
                onClick={() => deleteTask(item.id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded-full hover:bg-red-400"
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
