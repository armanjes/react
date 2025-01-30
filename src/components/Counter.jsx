import { useState } from "react";

const Counter = () => {
  // handling numbers
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  // handling objects
  const [user, setUser] = useState({
    name: "Doe",
    age: 25,
  });

    const updateAge = () => {
      setUser(prev => ({...prev, age: prev.age + 1}))
  };

  // handling arrays
  const [task, setTask] = useState(["exercise", "read", "pet"]);

  return (
    <>
      <div>
        <h1>count: {count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <br />
        <button onClick={decrement}>decrement</button>
      </div>
      <hr />
      {/* handling object */}
      <div>
        <h3>Name: {user.name}</h3>
        <h3>Age: {user.age}</h3>
        <button onClick={updateAge}>Update age</button>
      </div>
      <hr />
      {/* handling arrays */}
      <div>
        <ul>
          {task.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
        <button onClick={() => setTask(task => [...task, "new task"])}>Add task</button>
      </div>
    </>
  );
};
export default Counter;

/*
what is useState()?
useState is a hook used for managing states in functional components. It stores values between renders and triggers **re-render* after value change.

syntax: const [state, setState] = useState()

-> useState(): stores the initial value.
-> state: gives access to the initial value.
-> setState: is a setter function used for updating value.

We can store any value inside useState and render it like string, number, array, objects etc.
*/
