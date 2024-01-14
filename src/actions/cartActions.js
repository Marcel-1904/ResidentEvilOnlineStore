// Action creator function to add a product to the shopping cart
export const addToCart = (product) => {
  return {
    // Action type indicating the addition of a product to the cart
    type: "ADD_TO_CART",

    // Payload contains the product information being added to the cart
    payload: product,
  };
};

// Action creator function to remove a product from the shopping cart
export const removeFromCart = (itemId) => {
  return {
    // Action type indicating the removal of a product from the cart
    type: "REMOVE_FROM_CART",

    // Payload contains the identifier (e.g., itemId) of the product to be removed
    payload: itemId,
  };
};
