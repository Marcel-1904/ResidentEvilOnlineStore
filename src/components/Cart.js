import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import "./Cart.css";
import InfoModal from "./Modal";

const Cart = () => {
  // Redux hooks for dispatching actions and accessing state
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCost = useSelector((state) => state.cart.totalCost);

  // Function to handle removal of an item from the cart
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  // State hook for shipping cost
  const [shippingCost, setShippingCost] = useState(0);

  // Function to handle changes in shipping options
  const handleShippingCharge = (cost) => {
    setShippingCost(cost);
  };

  // Function to calculate the total cost including shipping
  const calculateTotalCost = (total) => {
    return totalCost + shippingCost;
  };

  // State hook for controlling the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to show the modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to refresh the page
  const refresh = () => window.location.reload(true);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <h3>Total Cost: ${calculateTotalCost(totalCost)}</h3>
      <div
        className={`product-cards-row${
          cartItems.length === 1 ? " single-product" : ""
        }`}
      >
        {/* Mapping through cart items to display product cards */}
        {cartItems.map((cartItem) => (
          <Card key={cartItem.id} className="cart-product-card">
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/" + cartItem.image}
              alt={cartItem.title}
              onError={() =>
                console.error(`Error loading image for ${cartItem.title}`)
              }
            />
            <Card.Body>
              <Card.Title className="product-title">
                {cartItem.title}
              </Card.Title>
              <Card.Text>{cartItem.description}</Card.Text>
              <Card.Text className="product-price">
                Price: ${cartItem.price}
              </Card.Text>
              <Button
                variant="danger"
                className="remove-btn"
                onClick={() => handleRemoveFromCart(cartItem.id)}
              >
                X
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="shipping-div">
        {/* Form for selecting shipping options */}
        <form>
          <label>Shipping</label>
          <br />
          <label>
            <input
              type="radio"
              name="shipping"
              onChange={() => handleShippingCharge(150)}
            />
            Express - $150
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="shipping"
              onChange={() => handleShippingCharge(70)}
            />
            Standard - $70
          </label>
        </form>
      </div>
      {/* Button to trigger order and payment with refresh */}
      <button className="order-btn" onClick={refresh}>
        Order & Pay
      </button>
      <br />
      {/* Image icon to trigger the info modal */}
      <img
        className="info-icon"
        src={process.env.PUBLIC_URL + "/question.png"}
        onClick={handleShowModal}
        alt="Info"
      />
      {/* Conditionally rendering the InfoModal component */}
      {showModal && (
        <InfoModal show={showModal} handleClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Cart;
