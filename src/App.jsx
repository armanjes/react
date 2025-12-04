import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="w-[96%] sm:w-[75%] md:w-[55%] mx-auto py-12">
      <h1 className="text-4xl text-center mb-3 font-semibold">Add Todo</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};
export default App;
