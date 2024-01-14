// Importing React and ReactDOM for rendering React components
import React from "react";
import ReactDOM from "react-dom/client";

// Importing the main styling file for the entire application
import "./index.css";

// Importing the main component of the application
import App from "./App";

// Importing the function to report web vitals for performance monitoring
import reportWebVitals from "./reportWebVitals";

// Importing the Redux Provider and the Redux store
import { Provider } from "react-redux";
import store from "./store/store";

// Creating a root for concurrent React rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the entire application within the Redux Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Reporting web vitals for performance monitoring
reportWebVitals();
