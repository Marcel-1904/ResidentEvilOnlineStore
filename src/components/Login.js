import { useFormik } from "formik";
import "./Login.css";

const validate = (values) => {
  const errors = {};

  // Checking for the presence and length of password
  if (!values.password) {
    errors.password = "Required";
    // Checking length
  } else if (values.password.length < 8) {
    errors.password = "Password should be at least 8 characters";
    // Checking for lowercase characters
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "Password should contain at least one lowercase letter";
    // Checking for uppercase characters
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Password should contain at least one uppercase letter";
    // Checking for numbers
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = "Password should contain at least one number";
    // Checking for special characters
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
    errors.password = "Password should contain at least one special character";
  }
  return errors;
};

// LoginForm component to handle user login
const LoginForm = ({ onLogin, onLogout }) => {
  // Using the useFormik hook for form handling
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      // Calling the onLogin function passed as a prop with the form values
      onLogin(values);
    },
  });

  return (
    <div className="login-form">
      {/* Heading for the form */}
      <h1 className="form-heading">Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email" className="login-label">
          Username
        </label>
        <br />
        {/* Input field for email */}
        <input
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.userName}
          required
          className=""
        />

        <br />
        <label htmlFor="password" className="login-label">
          Password
        </label>
        <br />
        {/* Input field for password */}
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
          className="password-input"
        />
        {/* Displaying password validation error if any */}
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <br />

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
