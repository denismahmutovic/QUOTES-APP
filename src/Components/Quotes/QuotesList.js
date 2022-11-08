import React from "react";
import axios from "axios";
import Quote from "./Quote";
import { TokenContext } from "../Context/UserContext";
import Drawer from "../Pages/Drawer";
import QuoteTag from "./QuoteTag";
import QuotesAdd from "./QuotesAdd";
import { Navigate, useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./QuoteList.css";

import { useContext, useEffect } from "react";
import { useState } from "react";

export default function Quotes() {
  const [changedScore, setChangedScore] = useState(false);
  const { getQuotes, quoteArray, sortTags, token, setToken } =
    useContext(TokenContext);

  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const handleCheck = (event, value) => {
    setPage(value);
  };

  const perPage = 5;
  const visitedPage = (page - 1) * perPage;
  const totalPages = Math.ceil(quoteArray.length / perPage);

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
  }, [changedScore, sortTags]);

  return (
    <div className="quoteListContainer">
      <QuotesAdd />
      <h1>Quotes</h1>
      {/* <QuoteTag /> */}
      {quoteArray
        .map((quote, i) => {
          return (
            <Quote
              key={quote.id + i.toString()}
              props={quote}
              updateScr={setChangedScore}
            />
          );
        })
        .slice(visitedPage, visitedPage + perPage)}
      <Stack spacing={2}>
        <Pagination
          page={page}
          count={totalPages}
          onChange={handleCheck}
          shape="rounded"
        />
      </Stack>
    </div>
  );
}
