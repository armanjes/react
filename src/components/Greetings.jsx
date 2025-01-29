/*
 * Components are reuseable pieces of UI
 * A function component is a javaScript function that returns JSX (javaScript XML)
 * Components should start with an uppercase letter
 * Prop stands for properties and this is an object. It allows us to send data from parent to child.
 * Props are read only (immutable), meaning a child component cannot modify the props it receives.
 */

/**
 * Default props allow you to set default values for props in case the parent component does not provide them.
 * Prevents undefined errors if a prop is not passed.
 * Ensures the component behaves correctly even if some props are missing.
 */

const Greetings = ({ name = "Guest" }) => {
  return (
    <div>
      <h1>Hello!</h1>
      <p>
        Greetings <b>{name}</b>
      </p>
    </div>
  );
};

export default Greetings;
