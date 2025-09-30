import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({ username: "", password: "", email: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8081/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Login failed");
      })
      .then((user) => {
        setMessage(`Welcome, ${user.username}!`);
        navigate("/");
      })
      .catch(() => setMessage("Invalid username or password"));
  }

  // function handleUpdate(e) {
  //   e.preventDefault();
  //   fetch(`http://localhost:8081/api/auth/update/${form.username}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email: form.email, password: form.password }),
  //   })
  //     .then((res) => res.text())
  //     .then((msg) => setMessage(msg));
  // }

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
    </form>
  );
}

export default Login;
