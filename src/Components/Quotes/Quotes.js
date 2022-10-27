import React from "react";
import axios from "axios";
import QuotesCss from "./Quotes.css";
import { TokenContext } from "../Context/UserContext";

import { useContext, useEffect } from "react";

import { useState } from "react";

export default function Quotes() {
  const [quoteArray, setQuoteArray] = useState([]);
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
  }, []);

  return (
    <div className="quoteListContainer">
      <h1>Quotes</h1>
      {quoteArray.map((el) => {
        return (
          <div className="dva" key={el.id}>
            <div>
              <p className="content">
                {" "}
                {el.content} {el.author}{" "}
              </p>
              <p className=""> {el.author} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
