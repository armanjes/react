import { useState } from "react";
import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";
import Todos from "./components/Todos";

const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "learn js",
      isCompleted: false,
    },
    {
      id: 2,
      title: "learn ts",
      isCompleted: false,
    },
    {
      id: 3,
      title: "learn py",
      isCompleted: false,
    },
  ]);
  const [input, setInput] = useState("");

  return (
    <div className="w-[96%] sm:w-[75%] md:w-[55%] mx-auto py-12">
      <AddTodo addTodo={{ todo, setTodo, input, setInput }} />
      <FilterTodo />
      <Todos todoArray={{ todo, setTodo }} />
    </div>
  );
};
export default App;
