import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../components/services/userService";

import userContext from "../components/contextAPI/userContext";
import { useLocalStore } from "../components/customHooks/localStore";

const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [setItem] = useLocalStore('userData');

  const { setUserAuth } = useContext(userContext);

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(user);
      const {
        status,
        data: { email, userId },
      } = response;
      console.log(response);

      if (status !== 200) {
        navigate("/login");
      }
      setUserAuth({ email, userId });
      setItem({email, userId});
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-form">
      <div className="card">
        <form onSubmit={handleSubmit}>
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
          <div className="form-group" style={{ marginTop: "50px" }}>
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="form-group">
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
