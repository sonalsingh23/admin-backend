import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../assests/CSS/Login.css'

import { useDispatch } from "react-redux";
import contactUsImage from '../assests/CSS/contactUs2.jpg'
// import { setToken } from "./Redux/counterSlice";
import { setToken } from "../Redux/loginSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For error display
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Move useDispatch hook here

  const handleLogin = async (e) => {
    console.log("function is calling");
    e.preventDefault();
    setErrorMessage(""); // Reset error message

    const postData = { email, password };

    try {
      const response = await axios.post(
        "http://192.168.1.14:8080/api/public/auth/login",
        postData
      );
      console.log("Login Successful:", response.data);
console.log(response.data.accessToken);
       dispatch(setToken(response.data.accessToken));
      

      // navigate("/dashboard"); // Navigate to a post-login page
      navigate('/navbar');

    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="container">
      <h3 className="heading">Login Form</h3>
      <div className="row">
        <div className="col-6 mt-4 form1">
          <form onSubmit={handleLogin}>
            <div className="form-body">
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary m-2">
                Login
              </button>
              <button
                type="button"
                className="btn btn-secondary m-2"
                // onClick={() => navigate("/signup")}
                
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
        <div className="col-6 mt-4">
          <div className="image1">
            <img src={contactUsImage} alt="Contact Us" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
