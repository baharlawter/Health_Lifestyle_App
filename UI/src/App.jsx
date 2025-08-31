import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListOfMeals from "./components/Shop/Shop";
import About from "./components/About/About";
import Api from "./components/Api/Api";

function App() {
  return (
    <>
      <BrowserRouter>
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
          </Routes>

          <Footer />
          <footer>© Copyright All rights reserved</footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
