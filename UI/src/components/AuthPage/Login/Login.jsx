import { useState } from "react";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8081/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Login failed");
      })
      .then((user) => setMessage(`Welcome, ${user.username}!`))
      .catch(() => setMessage("Invalid username or password"));
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <button type="submit">Login</button>
      <div>{message}</div>
    </form>
  );
}

export default Login;
