/*
📌 useState hook
useState hook allows to manage states in functional components. It preserves values between renders and triggers **re-render* when state updates.

📌syntax
const [state, setState] = useState(initialValue)
state → The current state value.
setState → A function to update the state.
initialValue → Holds the value of the state.
*/

import { useState } from "react";

const Counter = () => {
  // counter
  const [value, setValue] = useState(0);
  const handleIncrease = () => setValue((v) => v + 1);
  const handleDecrease = () => setValue((v) => v - 1);
  // object in state
  const [user, setUser] = useState({ name: "John Doe", age: 25 });
  const updateAge = () => {
    setUser((v) => ({
      ...v,
      age: v.age + 1,
    }));
  };

  return (
    <>
      <div>
        <h3>{value}</h3>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
      <hr />
      <div>
        <h3>Object in state</h3>
        <p>Name: {user.name}</p>
        <p>Name: {user.age}</p>
        <button onClick={updateAge}>Update age</button>
      </div>
    </>
  );
};
export default Counter;
