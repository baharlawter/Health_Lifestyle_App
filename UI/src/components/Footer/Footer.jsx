import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-social">
          <a href="#">
            <span role="img" aria-label="Facebook">
              📘
            </span>
          </a>
        </div>
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/shop">Shop Our Recomended Books</Link>
          <Link to="/api">Learn about food</Link>
          <Link to="/login">Login</Link>
        </div>
      </footer>
      <div className="site-footer">
        <hr />
        <p>&copy; {new Date().getFullYear()} Healthy Lifestyle App</p>
      </div>
      <Footer />
    </>
  );
}
export default Footer;
