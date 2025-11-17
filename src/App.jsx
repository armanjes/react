import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), title, isCompleted: false },
    ]);
  };

  const deleteTodo = (uid) => {
    setTodos((prev) => prev.filter((item) => item.id !== uid));
  };

  const editTodo = (uid, title) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === uid ? { ...item, title } : item))
    );
  };

  const toggleComplete = (uid) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === uid ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  return (
    <div className="w-[96%] sm:w-[75%] md:w-[55%] mx-auto py-12">
      <h1 className="text-4xl text-center mb-3 font-semibold">Add Todo</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
        onCompleteTodo={toggleComplete}
      />
    </div>
  );
};
export default App;
