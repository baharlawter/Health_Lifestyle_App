import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/shop">Shop Our Recommended Books</Link>
          <Link to="/api">Nutrition</Link>
          <Link to="/login">Login</Link>
          <Link to="/comments">Leave Your Comments</Link>
          <Link to="/">Blogs</Link>
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
