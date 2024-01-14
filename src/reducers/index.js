import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

// Combine reducers to create the root reducer
const rootReducer = combineReducers({
  cart: cartReducer, // Incorporate the cartReducer under the 'cart' key in the state
});

export default rootReducer;
