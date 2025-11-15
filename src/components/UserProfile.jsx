/*
 ✅ what is component?
 -> In react components are reuseable & independent building blocks that encapsulates a peice of UI & its associated code

 ✅ Key characteristics of React components:

 👉 Reuseable: Components are reuseable multiple times and this reduces code duplication.

 👉 Independent: Each component manages its own state and logic, operating in isolation from other components unless explicitly connected (e.g., through props). A component combines both the UI (what is rendered) and the behavior (how it functions) into a single unit.
 
 👉 Accepts Inputs (Props): Components can receive data from their parent components through a mechanism called "props" (short for properties). This allows for dynamic and customizable content within a component.

 👉 Manages State: Components can manage their own internal data, known as "state," which can change over time and trigger re-renders of the component.

 👉 Returns JSX: Components typically return JSX (JavaScript XML), which is a syntax extension that allows writing HTML-like structures directly within JavaScript code. This JSX describes what should be rendered on the screen.

 👉 There are 2 types of components 1. class component 2. functional component


*/

export default function UserProfile({
  name,
  year,
  congrasulate,
  user,
  bg = "bg-gray-200",
}) {
  
  const { userName, age } = user;



  return (
    <div className={`p-4 m-6 rounded-lg ${bg}`}>
      <h1>Hello, {name}</h1>
      <p>I am using react for {year} years.</p>
      <button onClick={congrasulate} className="px-4 py-2 rounded-md bg-blue-700 text-blue-100 my-4">Congrasulate!</button>
      <p>
        Name: {userName}. Age: {age}
      </p>
    </div>
  );
}

/*

✅ How Components Communicate

Communication between components predominantly achieved using a unidirectional (parent-to-child) data flow via props. For the reverse path (child-to-parent), callBacks.

1. Parent-to-Child Communication (Props)
The primary method of communication is for data to flow downwards.
A parent component passes data (variables, functions, objects) to a child component using props (short for properties).
The child component receives these props and uses them to render its UI or execute logic.
Props are read-only for the child; a child component can never directly modify the data it receives via props, which keeps the data flow predictable.

2. Child-to-Parent Communication (Callbacks/Event Handlers)
To send information back up the hierarchy or signal an event, a child component uses a callback function.
The parent component defines a function (the callback) and passes it down to the child component as a prop.
The child component calls this function when a specific event occurs (e.g., a button click, form submission).
The child can pass data as arguments to the callback function, which is then executed in the parent's scope.

3. Cross-Component Communication (Context API or State Management)
For communication between components that are not directly related (siblings or distant cousins), more advanced mechanisms are used:
Lifting State Up: This involves moving the shared state to a common ancestor component and then passing the state down to both components via props.
Context API: This feature is used to avoid "prop drilling" (passing props through many intermediate components) when many components need access to the same global data, such as themes, authenticated user info, or localization settings. You can learn more about this in the React documentation on Context.
External State Management Libraries: For large-scale applications with complex data needs, libraries like Redux or Zustand are often used to manage a centralized "store" of application state, accessible to all components.

*/
