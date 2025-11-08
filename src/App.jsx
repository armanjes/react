/**
 * syntax: const [state, dispatch] = useReducer(reducer, initialState)
 * reducer: reducer is a pure function with two arguments state & action. This function specifies how the state gets updated.
 * initialState: The value from which initial state gets calculated.
 * This hook returns an array of two values state & dispatch.
 */

import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment_age":
      return { ...state, age: state.age + 1 };
    case "change_name":
      return { ...state, name: action.name };
  }
    throw Error("Unknown action: " + action.type);
}

function stateObj() {
  return { name: "taylor", age: 42 };
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, stateObj());

  return (
    <>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "change_name", name: e.target.value })
        }
        placeholder="Type here"
      />
      <button onClick={() => dispatch({type: "increment_age"})}>Increment Age</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </>
  );
};
export default App;
