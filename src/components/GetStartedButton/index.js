import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const GetStartedButton = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username"); // Get username from localStorage

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="button-container">
      {username ? (
        <span className="user-greeting">Hello, {username} 👋</span>
      ) : (
        <button className="get-started-btn" onClick={handleClick}>
          Get Started Now
        </button>
      )}
    </div>
  );
};

export default GetStartedButton;
