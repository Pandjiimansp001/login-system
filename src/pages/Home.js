import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const localUsername = localStorage.getItem("username");

  const logoutHandler = () => {
    navigate("/signin");
  };

  return (
    <>
      <div className="home__container">
        <div className="home__content">
          <span className="home__text">Welcome {localUsername}</span>
          <button type="button" onClick={logoutHandler}>
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
