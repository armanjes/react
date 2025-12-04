import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {

  const todos = useSelector(state => state.todos.todos)

  return (
    <ul className="space-y-2">
      {!todos.length && (<p className="text-center mt-8 text-gray-400">No tasks yet.</p>)}

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}
