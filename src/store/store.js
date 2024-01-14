import { createStore, combineReducers } from "redux";
import cartReducer from "../reducers/cartReducer";

// Combine reducers to create the root reducer
const rootReducer = combineReducers({
  cart: cartReducer, // Incorporate the cartReducer under the 'cart' key in the state
});

// Create the Redux store with the root reducer
const store = createStore(rootReducer);

export default store;
