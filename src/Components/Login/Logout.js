import React from "react";
import { useContext, useEffect } from "react";
import { TokenContext } from "../Context/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Quotes from "../Quotes/QuotesList";
import QuoteTag from "../Quotes/QuoteTag";
import "./Logout.css";
import Button from "@mui/material/Button";
import Drawer from "../Pages/Drawer";
import QuotesAdd from "../Quotes/QuotesAdd";
import Proba from "../Pages/Proba";
const LoginForm = () => {
  const { setToken, setAfterLogin, token, getQuotes } =
    useContext(TokenContext);
  const navigate = useNavigate();
  const logout = ({ logout }) => {
    setToken(null);
    localStorage.setItem("token", null);
    navigate("/");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (token === null) {
      let tkn = localStorage.getItem("token");
      if (!tkn) {
        navigate("/");
      }

      setToken(tkn);
    }
  }, [token]);

  useEffect(() => {
    getQuotes();
  }, [token]);
  return (
    <div>
      <div className="aut">
        <h1 className="name">Quotes</h1>

        <QuotesAdd />
        {/* <Proba /> */}
        <Drawer />
        <Button
          variant="contained"
          onClick={logout}
          style={{ background: "#263949" }}
        >
          Logout
        </Button>
      </div>
      <Quotes />
    </div>
  );
};

export default LoginForm;
