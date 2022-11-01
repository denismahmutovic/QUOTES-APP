import React from "react";
import axios from "axios";
import Quote from "./Quote";
import { TokenContext } from "../Context/UserContext";
import Drawer from "../Pages/Drawer";
import QuoteTag from "./QuoteTag";

import "./QuoteList.css";

import { useContext, useEffect } from "react";
import { useState } from "react";

export default function Quotes() {
  const [quoteArray, setQuoteArray] = useState([]);
  const [changedScore, setChangedScore] = useState(false);

  const { token } = useContext(TokenContext);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/quotes`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(({ data }) => {
        console.log(data.quotes);
        setQuoteArray(data.quotes);
      });
  }, [changedScore]);

  return (
    <div className="quoteListContainer">
      <h1>Quotes</h1>
      <Drawer />

      {quoteArray.map((quote, i) => {
        return (
          <Quote
            key={quote.id + i.toString()}
            props={quote}
            updateScr={setChangedScore}
          />
        );
      })}
    </div>
  );
}
