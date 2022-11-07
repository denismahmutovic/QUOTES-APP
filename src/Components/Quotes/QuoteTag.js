import React from "react";
import { TokenContext } from "../Context/UserContext";
import axios from "axios";
import { useEffect, useContext } from "react";
import { useState } from "react";
export default function QuoteTag() {
  const { token, setSortTags, sortTags } = useContext(TokenContext);
  const [tags, setTag] = useState([]);
  const [checked, setChecked] = useState([]);
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

  // const handleCheck = (event) => {
  //   let updatedList = [...sortTags];
  //   if (event.target.sortTags) {
  //     updatedList = [...sortTags, event.target.value];
  //   } else {
  //     updatedList.splice(sortTags.indexOf(event.target.value), 1);
  //   }
  //   setSortTags(updatedList);
  // };

  const handleCheckBox = (e) => {
    setSortTags((prev) => {
      if (prev.find((el) => el === e.target.value)) {
        return prev.filter((el) => el !== e.target.value);
      } else {
        return [...prev, e.target.value];
      }
    });
  };
  return (
    <div>
      {tags.map((el) => {
        return (
          <div key={el}>
            <input
              defaultValue={el}
              type="checkbox"
              onClick={(e) => handleCheckBox(e)}
              // onChange={handleCheckBox}
            />

            <label> {el}</label>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}
