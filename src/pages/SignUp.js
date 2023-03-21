import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (username && email && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    }

    if (!username || !email || !password) {
      alert("Please fill in all the form!");
    } else {
      alert("Successfully create account!");
      navigate("/signin");
    }

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="form__container">
        <form onSubmit={submitHandler}>
          <span className="sign">Sign Up</span>
          <input
            type="text"
            placeholder="masukkan username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Create Account</button>
          <span className="sign__info">
            Already have an account ? please <Link to="/signin">Sign In</Link>.
          </span>
        </form>
      </div>
    </>
  );
};

export default SignUp;
