import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { TokenContext } from "../Context/UserContext";
import "./QuoteScore.css";
import axios from "axios";

export default function QuoteScore({ data, setScr }) {
  const { token } = useContext(TokenContext);

  const percentage = Math.ceil(
    (100 / (data.upvotesCount + data.downvotesCount)) * data.upvotesCount
  );

  const addVote = (vote) => {
    return fetch(`http://localhost:8000/quotes/${data.id}/${vote}`, {
      method: "POST",
      headers: { Authorization: "Bearer " + token },
    });
  };

  const deleteVote = (vote) => {
    return fetch(`http://localhost:8000/quotes/${data.id}/${vote}`, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token },
    });
  };

  const vote = (type) => {
    if (data.givenVote === type) {
      deleteVote(type).then(() => setScr((prev) => !prev));
    } else if (data.givenVote === "upvote" && type === "downvote") {
      deleteVote("upvote").then(() =>
        addVote("downvote").then(() => setScr((prev) => !prev))
      );
    } else if (data.givenVote === "downvote" && type === "upvote") {
      deleteVote("downvote").then(() =>
        addVote("upvote").then(() => setScr((prev) => !prev))
      );
    } else {
      addVote(type).then(() => setScr((prev) => !prev));
    }
  };

  return (
    <div className="ScoreContainer">
      <p
        onClick={() => {
          vote("upvote");
        }}
      >
        <FontAwesomeIcon
          style={{
            color:
              data.givenVote === "upvote"
                ? "rgb(165, 165, 165)"
                : "rgb(104, 104, 104)",
          }}
          className="icon"
          icon={faCaretUp}
        />
      </p>
      <p
        className="percentage"
        style={{
          color: `hsl(${percentage ? percentage : "0"}, 100%, 50%)`,
        }}
      >
        {percentage ? percentage : "0"}%
      </p>
      <p className="votes">{data.upvotesCount + " / " + data.downvotesCount}</p>
      <p
        onClick={() => {
          vote("downvote");
        }}
      >
        <FontAwesomeIcon
          style={{
            color:
              data.givenVote === "downvote"
                ? "rgb(165, 165, 165)"
                : "rgb(104, 104, 104)",
          }}
          className="icon"
          icon={faCaretDown}
        />
      </p>
    </div>
  );
}
