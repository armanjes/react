import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
          setUsers(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin flex items-center justify-center">😡</div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500 font-medium">{error}</p>
    );
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">User List</h1>

      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 shadow-md bg-white rounded-lg border hover:shadow-lg transition"
          >
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
