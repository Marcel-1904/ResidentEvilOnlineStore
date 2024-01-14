import React, { useState } from "react";
import SignupForm from "./SignUp";
import Login from "./Login";
import "./Home.css";

function Home() {
  // State to manage whether the user is in the login or signup form
  const [isLogin, setIsLogin] = useState(true);

  // State to store information about the logged-in user
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Function to toggle between login and signup forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Function to handle user login
  const handleLogin = (user) => {
    console.log("Logging in:", user);
    setLoggedInUser(user);
  };

  // Function to handle user logout
  const handleLogout = () => {
    setLoggedInUser(null);
  };

  // JSX structure of the component
  return (
    <div>
      {loggedInUser ? (
        // Display welcome message and logout button if user is logged in
        <div className="header">
          <h1>Welcome {loggedInUser.userName}</h1>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        // Display login or signup form based on the current state
        <div className="form-btn-div">
          <button className="form-btn" onClick={() => toggleForm()}>
            {isLogin ? "Signup" : "Login"}
          </button>
          {/* Conditional rendering of Login or SignupForm components */}
          {isLogin ? (
            <Login onLogin={handleLogin} />
          ) : (
            <SignupForm onLogin={handleLogin} />
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
