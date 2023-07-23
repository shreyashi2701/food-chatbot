import React, { useState } from 'react';
import './styles.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    
    // Assuming you have a backend endpoint for login
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Successful login logic (e.g., redirect to dashboard)
      console.log('Login successful!');
    } else {
      // Handle login error (e.g., show error message)
      console.error('Login failed!');
      window.location='/FoodOrderChat'
    }
  };

  return (
    <div className="app">
    <div className='login-form'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>

      </form>
    </div>
    </div>
  );
};

export default Login;