import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleMobileNoChange = (e) => {
    setMobileNo(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!mobileNo || !email || !password || !confirmPassword) {
      setError("All fields are mandatory.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Check if password meets requirements
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (!password.match(passwordPattern)) {
      setError(
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character."
      );
      return;
    }

    if (mobileNo.length !== 10) {
      setError("Enter a valid mobile number.");
      return;
    }

    // Perform signup logic here, e.g., send user data to a backend server.
    console.log("Mobile No:", mobileNo);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Clear the input fields and error after successful submission
    setMobileNo("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");

    // Route to login page after successful signup
    window.location.href = "/";
  };

  return (
    <div>
      <div className="signuppage_img">
        <div >
          <h2 style={{ color: "yellow", fontWeight:"bold", textDecoration:"underline"}}>Sign Up</h2>
          <form className="signup-container" onSubmit={handleSubmit}>
            <div>
              <label>Email: </label>
              <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
              <label>Mobile No: </label>
              <input
                type="text"
                value={mobileNo}
                onChange={handleMobileNoChange}
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <label>Confirm Password: </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            {error && (
              <p style={{ color: "red" }} className="error">
                {error}
              </p>
            )}
            <button type="submit">Sign Up</button>
            <br />
            <Link to="/">Already have an account? Login here</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
