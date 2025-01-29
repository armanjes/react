import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="about">About</div>
      <button onClick={() => navigate("/")}>Navigate to Home page</button>
    </>
  );
};
export default About;

/**
 * useNavigate is a hook in react-router-dom.
 * It is useful for redirecting after login, register, form submission, API calls.
 * You can trigger navigation inside functions, events, or useEffect.
 * Link and useNavigate works same but serves different purposes. Link is a Component and UseNavigate is a hook. Link used for clickable links and UseNavigate used inside function to navigate programmatically(e.g. login, register, form submission and condition).
 */
