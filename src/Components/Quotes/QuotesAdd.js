import React, { useContext, useState } from "react";
import { TokenContext } from "../Context/UserContext";
import axios from "axios";
import { useEffect } from "react";

export default function QuotesAdd() {
  const { token } = useContext(TokenContext);
  const [contentValue, setContentValue] = useState("");
  const [authorValue, setAuthorValue] = useState("");
  const [tagsValue, setTagsValue] = useState("");
  const [axiosAuthor, setAxiosAuthor] = useState();
  const [axiosContent, setAxiosContent] = useState();
  const [axiosTags, setAxiosTags] = useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addQuote = () => {
    axios.post(
      "http://localhost:8000/quotes",
      {
        content: axiosContent,
        author: axiosAuthor,
        tags: axiosTags,
      },
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
  };

  return (
    <div>
      <form
        height={300}
        width={"60%"}
        style={{
          display: "flex",
        }}
        onSubmit={(e) => (
          e.preventDefault(), addQuote(), console.log("aklsjdlsa")
        )}
      >
        <input
          type={"text"}
          placeholder="Add content"
          required
          className="inputstyle"
          value={contentValue}
          onChange={(e) => setContentValue(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            type={"text"}
            placeholder="Author"
            required
            value={authorValue}
            onChange={(e) => setAuthorValue(e.target.value)}
            className="inputposition"
          />
          <input
            type={"text"}
            placeholder="Tags"
            required
            value={tagsValue}
            onChange={(e) => setTagsValue(e.target.value)}
            className="inputposition marginS"
          />
          <button
            className="inputposition marginL"
            type="submit"
            onClick={() => (
              setAxiosContent(contentValue),
              setAxiosAuthor(authorValue),
              setAxiosTags(tagsValue.split(","))
            )}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
