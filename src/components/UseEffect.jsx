import { useState, useEffect } from "react";

const UseEffect = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
        console.log("increment");
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();

    return () => {};
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default UseEffect;

/**
 * useEffect is a react hook used for handling side effects in functional components. such as fetching data from api, updating the dom, subscribing to the event, managing timers
 syntax:
 useEffect(() => {} return () => {}, [])

 useEffect takes a function as parameter and returns a clean up function. The array has special role. It re-runs effect if the value of dependency array changes.
 */
