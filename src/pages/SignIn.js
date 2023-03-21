import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (email === localEmail && password === localPassword) {
      alert("Sign in succsess!");
      navigate("/home");
    } else {
      alert("Email or Password is not correct!");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="form__container">
        <form onSubmit={submitHandler}>
          <span className="sign">Sign In</span>
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
          <button type="submit">Sign In</button>
          <span className="sign__info">
            If you don't have an account, please{" "}
            <Link to="/signup">Sign Up</Link>.
          </span>
        </form>
      </div>
    </>
  );
};

export default SignIn;
