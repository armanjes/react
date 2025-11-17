import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onDeleteTodo,
  onCompleteTodo,
  onEditTodo,
}) {

  return (
    <ul className="space-y-2">

      {!todos.length && (<p className="text-center mt-8 text-gray-400">No tasks yet.</p>)}

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          uid={todo.id}
          title={todo.title}
          onDeleteTodo={onDeleteTodo}
          onCompleteTodo={onCompleteTodo}
          onEditTodo={onEditTodo}
          onCompleted={todo.isCompleted}
        />
      ))}
    </ul>
  );
}
