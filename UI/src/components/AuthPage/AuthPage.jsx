import Login from "./Login/Login";
import Register from "./Register/Register";

function AuthPage() {
  return (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      <div>
        <h2>Register</h2>
        <Register />
      </div>
      <div>
        <h2>Login</h2>
        <Login />
      </div>
    </div>
  );
}
export default AuthPage;
