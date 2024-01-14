import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    // Set up the application routing using React Router
    <Router>
      {/* Include the Navigation component to provide navigation links */}
      <Navigation />

      {/* Define route configurations */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the products page */}
        <Route path="/products" element={<Products />} />

        {/* Route for the about page */}
        <Route path="/about" element={<About />} />

        {/* Route for the cart page */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
