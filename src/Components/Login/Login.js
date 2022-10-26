import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { TokenContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const { setToken, setAfterLogin } = useContext(TokenContext);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/sessions", {
        username: user,
        password: password,
      })
      .then(function (response) {
        setToken(response.data.accessToken);
        localStorage.setItem("token", response.data.accessToken);
        setAfterLogin(true);
        setInvalid(false);
        navigate("/logout");
        console.log(response.data.accessToken);
      })
      .catch(function (err) {
        setToken(null);
        localStorage.setItem("token", null);
        setAfterLogin(false);
        setInvalid(true);
      });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <h2>Login</h2>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name "
              id="name"
              onChange={(e) => setUser(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <input type="submit" value="LOGIN"></input>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
