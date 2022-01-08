import React, { useState, useEffect } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { autoLogin } from "../Redux";

const Userlogin = () => {
  const paperStyle = {
    padding: 20,
    height: "400px",
    width: 380,
    margin: "20px auto",
    align: "center",
  };

  const btnstyle = {
    margin: "8px 0",
    height: 40,
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const [token, setToken] = useState(null);
  const [signinProgress, setSignProgress] = useState(false);
  const dispatch = useDispatch();

  const uToken = useSelector((state) => state.loginStatusReducer);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("uToken", uToken);
    if (uToken.token !== "") {
      navigate("/allUsers");
    }
  });

  useEffect(() => {
    if (loginStatus !== null) {
      if (loginStatus !== true) {
        // toast.warning("Incorrect Username passwords", {
        //   position: "top-center",
        // });
        setSignProgress(!signinProgress);
      }
    }
  }, [loginStatus]);

  useEffect(() => {
    if (token !== null && token !== "") {
      navigate("/allUsers");
      dispatch(autoLogin(token));
    }
  }, [token]);

  const onChangeUsername = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  function saveUser(e) {
    setSignProgress(!signinProgress);
    e.preventDefault();
    setEmail("");
    setPassword("");
    let data = { email, password };
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "content-type": "Application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setLoginStatus(true);
          return res.json();
        } else {
          setLoginStatus(false);
          toast.warning("Incorrect Username passwords", {
            position: "top-center",
          });
          return res.json();
        }
      })
      .then((res) => {
        console.log(res);
        if (res.hasOwnProperty("token") && res.token !== "") {
          setToken(res.token);
        }
      });
  }
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h1>Login Here</h1>
        </Grid>

        <TextField
          label="UserName"
          placeholder="Enter Your Email"
          value={email}
          onChange={onChangeUsername}
          fullWidth
          required
        />
        <br />
        <br />

        <TextField
          label="Password"
          placeholder="Enter Your Password"
          type="password"
          value={password}
          onChange={onChangePassword}
          fullWidth
          required
        />
        <br />
        <br />
        {!signinProgress ? (
          <Button
            disabled={signinProgress}
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={saveUser}
          >
            signin
          </Button>
        ) : (
          <h2>loading....</h2>
        )}
        <ToastContainer />
      </Paper>
    </Grid>
  );
};
export default Userlogin;
