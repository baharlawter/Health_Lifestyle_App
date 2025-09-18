import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Api from "./components/Api/Api";
import BlogDetail from "./components/Home/Blogs/BlogDetail";
import Footer from "./components/Footer/Footer";
import Comments from "./components/Comments/Comments";
import Login from "./components/Login/Login";

function AppContent() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Header />
      <br />
      <div className="page-title">
        <h1>Healthy Living Starts Here</h1>
        <h2>Made by: Bahar Lawter</h2>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/api" element={<Api />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* this only shows the commets in login page */}
      {location.pathname !== "/login" && <Comments />}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
