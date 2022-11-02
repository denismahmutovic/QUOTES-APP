import React from "react";
import { TokenContext } from "../Context/UserContext";
import axios from "axios";
import { useEffect, useContext } from "react";
import { useState } from "react";
export default function QuoteTag() {
  const { token, setSortTags } = useContext(TokenContext);
  const [tags, setTag] = useState([]);
  // const [sortTags, setSortTags] = useState([]);

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
          <div key={el}>
            <input
              defaultValue={el}
              type="name"
              onClick={(e) => setSortTags(e.target.value)}
            />
          </div>
        );
      })}
    </div>
  );
}
