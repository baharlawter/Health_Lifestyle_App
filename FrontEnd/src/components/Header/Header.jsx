import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo">
          🥑 Healthy Lifestyle
        </Link>
        <nav className="main-nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/foodinfo">Nutrition</NavLink>
          <NavLink to="/authPage">Login</NavLink>
          <NavLink to="/comments"> Comments</NavLink>
          <NavLink to="/gemini">AI Assisstant</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
