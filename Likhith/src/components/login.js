import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!email || !password) {
      setError('All fields are mandatory.');
      return;
    }

    // Perform login logic here, e.g., send the credentials to a backend server.
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear the input fields and error after successful submission
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div>
      <div className="loginpage_img"></div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email Id:</label>&nbsp;&nbsp;&nbsp;
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          {error && <p style={{color:"red"}} className="error">{error}</p>}
          {email && password ? (
            <Link to="/home">
              <button type="submit">Login</button>
            </Link>
          ) : (
            <button type="submit">Login</button>
          )}
          <br />
          <Link to="/signup">
            <button className="signup">Sign Up</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
