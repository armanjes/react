const Card = (props) => {
  return (
    <div
      style={{
        border: `2px solid ${props.color || "red"}`,
        padding: "10px",
        background: "#f8d7da",
        width: "220px",
        color: "#000000",
      }}
    >
      {props.children}
    </div>
  );
};
export default Card;

/*
props.children is useful when you want a wrapper component that can handle dynamic content inside it.
It is commonly used for cards, layouts, modals, and UI containers.
*/
