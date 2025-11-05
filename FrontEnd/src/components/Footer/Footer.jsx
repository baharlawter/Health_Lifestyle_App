import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/shop">Shop Our Recommended Books</Link>
          <Link to="/foodinfo">Nutrition</Link>
          <Link to="/authPage">Login</Link>
          <Link to="/comments">Leave Your Comments</Link>
          <Link to="/">Blogs</Link>
          <Link to="/gemini">AI Assisstant</Link>
        </div>
      </footer>
      <div className="site-footer">
        <hr />
        <p>&copy; {new Date().getFullYear()} Healthy Lifestyle App</p>
      </div>
    </>
  );
}

export default Footer;
