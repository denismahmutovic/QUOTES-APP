import React, { useContext, useState } from "react";
import { TokenContext } from "../Context/UserContext";
import axios from "axios";

import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Add.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,

  bgcolor: "background.paper",
  border: "2px solid #000 ",
  boxShadow: 24,
  p: 4,
};

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
    <div className="d">
      <Button onClick={handleOpen}>Dodaj citat</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box
          sx={style}
          className="box"
          onSubmit={(e) => (
            e.preventDefault(),
            addQuote(),
            console.log("aklsjdlsa"),
            handleClose()
          )}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              label="Add Content"
              variant="filled"
              color="success"
              focused
              type={"text"}
              placeholder="Content"
              required
              className="inputstyle"
              value={contentValue}
              onChange={(e) => setContentValue(e.target.value)}
            />
            <TextField
              label="Author"
              color="secondary"
              focused
              className="proba"
              type={"text"}
              placeholder="Author"
              required
              value={authorValue}
              onChange={(e) => setAuthorValue(e.target.value)}
            />
            <TextField
              label="Tags"
              variant="standard"
              color="warning"
              focused
              type={"text"}
              placeholder="Tags"
              required
              value={tagsValue}
              onChange={(e) => setTagsValue(e.target.value)}
              className="inputposition marginS"
            />

            <form>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Button
                  className=""
                  type="submit"
                  onClick={() => (
                    setAxiosContent(contentValue),
                    setAxiosAuthor(authorValue),
                    setAxiosTags(tagsValue.split(","))
                  )}
                >
                  Add
                </Button>
              </div>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
