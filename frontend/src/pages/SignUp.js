import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../components/services/userService";

const SignUp = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate()

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addUser(user);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-form">
      <div className="card" style={{ height: "650px", width: "500px" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="username">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="address">Address</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="pincode">Pincode</label>
            <input
              type="number"
              name="pincode"
              value={user.pincode}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="phone">Phone</label>
            <input
              type="number"
              name="phone"
              value={user.phone}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Sign Up</button>
          </div>
        </form>
        <div className="form-group">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
