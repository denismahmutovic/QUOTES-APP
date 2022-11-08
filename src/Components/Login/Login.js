import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { TokenContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import LoginCss from "./Login.css";

import Avatar from "@mui/material/Avatar";

import CssBaseline from "@mui/material/CssBaseline";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

  // return (
  //   <>
  //     <form onSubmit={submitHandler}>
  //       <div>
  //         <h2>Login</h2>
  //         <div>
  //           <label htmlFor="name">Name: </label>
  //           <input
  //             type="text"
  //             name="name "
  //             id="name"
  //             onChange={(e) => setUser(e.target.value)}
  //           ></input>
  //         </div>
  //         <div>
  //           <label htmlFor="password">Password:</label>
  //           <input
  //             type="password"
  //             name="password"
  //             id="password"
  //             onChange={(e) => setPassword(e.target.value)}
  //           ></input>
  //         </div>
  //         <div>
  //           <input type="submit" value="LOGIN"></input>
  //         </div>
  //       </div>
  //     </form>
  //   </>
  // );
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" onSubmit={submitHandler}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="User Name"
              name="Name"
              onChange={(e) => setUser(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
