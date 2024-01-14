// Initial state for the cart
const initialState = {
  cartItems: [], // Array to store items in the cart
  totalItems: 0, // Total number of items in the cart
  totalCost: 0, // Total cost of items in the cart
};

// Reducer function to manage the cart state
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action type to add an item to the cart
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload], // Add new item to cartItems array
        totalItems: state.totalItems + 1, // Increment totalItems count
        totalCost: state.totalCost + action.payload.price, // Add the price of the new item to totalCost
      };

    // Action type to remove an item from the cart
    case "REMOVE_FROM_CART":
      const removedItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (!removedItem) {
        return state; // If the item to be removed is not found, return the current state
      }

      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCartItems, // Remove the item from cartItems array
        totalItems: state.totalItems - 1, // Decrement totalItems count
        totalCost: state.totalCost - removedItem.price, // Subtract the price of the removed item from totalCost
      };

    // Default case for unknown action types
    default:
      return state; // Return the current state if the action type is not recognized
  }
};

export default cartReducer;
