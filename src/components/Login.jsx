import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Validation Schema
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(12, "Password cannot exceed 12 characters."),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto", textAlign: "center" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit(submit)}>
        {/* Name Input */}
        <input
          {...register("name")}
          placeholder="Enter name"
          autoFocus
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>

        {/* Email Input */}
        <input
          {...register("email")}
          type="email"
          placeholder="Enter email"
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        {/* Password Input */}
        <input
          {...register("password")}
          type="password"
          placeholder="Enter password"
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Login;
