/**

React, the libray for we and native user interfaces.The core philosophy of React is to build user interfaces with a component-based and declarative approach. This means developers compose applications from small, reusable components that encapsulate their own logic and markup. React favors declarative syntax, where you describe how the UI should look based on its state, and uses a virtual DOM for efficient updates, making complex applications more predictable and maintainable. 

 */

import UserProfile from "./components/UserProfile.jsx";

const App = () => {
  const congrasulate = () => alert("Congrasulations!!!")
  const userInfo = {userName: "John Doe", age: 40}
  return (
    <>
      <UserProfile name="React" year={5} congrasulate={congrasulate} user={userInfo}/>
      
      <UserProfile name="React" year={5} congrasulate={congrasulate} user={userInfo} bg="bg-green-200" />
    </>
  );
};
export default App;

/**
 ✅ Key principles of React's philosophy:

 👉 Component-Based Architecture: The entire UI is built by composing small, reusable components, each handling its own logic and rendering. This modular approach simplifies development and maintenance of complex applications.

 👉 Declarative Syntax: Instead of writing imperative commands to manually manipulate the DOM, you declaratively tell React what the UI should look like at any given state. React then handles the updates efficiently behind the scenes.

 👉 Virtual DOM: React maintains an in-memory representation of the DOM. When state changes, React compares the new virtual DOM with the previous one and only updates the necessary parts of the actual browser DOM, leading to optimized performance.

 👉 Unidirectional Data Flow: Data flows in a single direction, from parent to child components, via props. This makes it easier to understand how data changes are propagating and debug issues, as you can follow the flow from the top of the component tree down.

 👉 Keep State Minimal: The principle of "Don't Repeat Yourself" (DRY) is applied to state management. You should only store the absolute minimal data in state and compute any other derived information when needed.

 👉 Developer Experience: React prioritizes a smooth developer experience through features like JSX for writing UI in a more readable, HTML-like syntax within JavaScript, and through its asynchronous and schedulable updates that prevent blocking the main thread. 
 */
