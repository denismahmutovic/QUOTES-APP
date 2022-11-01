import React from "react";
import { TokenContext } from "../Context/UserContext";
import axios from "axios";
import { useEffect, useContext } from "react";
import { useState } from "react";
export default function QuoteTag() {
  const { token } = useContext(TokenContext);
  const [tags, setTag] = useState([]);

  const handleChange = (e) => {
    setTag(e.target.value);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/tags`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(({ data }) => {
        console.log(data);
        setTag(data);
      });
  }, []);
  return (
    <div>
      {tags.map((el) => {
        return (
          <input
            value={el}
            type="name"
            onChange={(e) => setTag(e.target.value)}
          />
        );
      })}
    </div>
  );
}
