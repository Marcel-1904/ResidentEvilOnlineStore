import { useFormik } from "formik";
import "./SignUp.css";

// Validation function to validate form fields
const validate = (values) => {
  const errors = {};

  // Validation for first name
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "First name must be 15 characters or less";
  } else if (/[^a-zA-Z]/.test(values.firstName)) {
    errors.firstName = "First name can only contain letters";
  }

  // Validation for last name
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Last name must be 20 characters or less";
  } else if (/[^a-zA-Z]/.test(values.lastName)) {
    errors.lastName = "Last name can only contain letters";
  }

  // Validation for email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

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

// SignupForm component for user registration
const SignupForm = ({ onLogin }) => {
  // Formik hook to handle form state and submission
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      onLogin(values);
    },
  });

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Input field for first name */}
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          required
        />
        {/* Displaying first name validation error if any */}
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        <br />

        {/* Input field for last name */}
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          required
          className="signup-input-field"
        />
        {/* Displaying last name validation error if any */}
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        <br />

        {/* Input field for username */}
        <label htmlFor="userName">Username</label>
        <br />
        <input
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.userName}
          required
          className="signup-input-field"
        />
        <br />

        {/* Input field for email */}
        <label htmlFor="email" className="signup-label">
          Email Address
        </label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
          className="signup-input-field"
        />
        {/* Displaying email validation error if any */}
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <br />

        {/* Input field for password */}
        <label htmlFor="password" className="signup-label">
          Password
        </label>
        <br />
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
          className="signup-input-field"
        />
        {/* Displaying password validation error if any */}
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <br />

        {/* Button to submit the form */}
        <button type="submit" className="signup-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
