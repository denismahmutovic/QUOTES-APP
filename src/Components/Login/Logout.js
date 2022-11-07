import React from "react";
import { useContext } from "react";
import { TokenContext } from "../Context/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Quotes from "../Quotes/QuotesList";
import QuoteTag from "../Quotes/QuoteTag";
import "./Logout.css";
import Button from "@mui/material/Button";
import Drawer from "../Pages/Drawer";
const LoginForm = () => {
  const { setToken, setAfterLogin } = useContext(TokenContext);
  const navigate = useNavigate();
  const logout = ({ logout }) => {
    setToken(null);
    localStorage.setItem("token", null);
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="aut">
        <h1>Quotes</h1>
        <Button variant="contained" onClick={logout}>
          Logout
        </Button>
        <Drawer />
      </div>
      <Quotes />
    </div>
  );
};

export default LoginForm;
