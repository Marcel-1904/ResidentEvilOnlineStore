import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useSelector } from "react-redux";

// Navigation component displays a list of navigation links
const Navigation = () => {
  // Get the total number of items in the cart from Redux state
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <div>
      {/* Navigation links in an unordered list */}
      <ul>
        {/* Home link */}
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        {/* Products link */}
        <li>
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
        {/* About link */}
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        {/* Cart link with the total number of items in the cart */}
        <li className="cart-link">
          <Link to="/cart">Cart({totalItems})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
