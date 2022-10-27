import React from "react";
import { useContext } from "react";
import { TokenContext } from "../Context/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Quotes from "../Quotes/Quotes";

const LoginForm = () => {
  const { setToken, setAfterLogin } = useContext(TokenContext);
  const navigate = useNavigate();
  const logout = () => {
    setToken(null);
    localStorage.setItem("token", null);
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      Hello
      <button onClick={logout}>Logout</button>
      <Quotes />
    </div>
  );
};

export default LoginForm;
