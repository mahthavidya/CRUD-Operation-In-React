import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Grid, Paper, Button, TextField, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { FlashOnRounded } from "@material-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Userupdate = () => {
  const paperStyle = {
    padding: 20,
    height: "300px",
    width: 300,
    margin: "20px auto",
    align: "center",
  };
  const btnstyle = {
    margin: "8px 0",
    height: 40,
  };
  const loc = useLocation();

  const [userid, setUserId] = useState(null);
  const [userData, setUserData] = useState({});
  const [update, setUpdate] = useState(true);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (loc.state !== 0 && loc.state !== null) {
      setOpen(true);
      setUserId(loc.state);
    }
  }, []);

  useEffect(() => {
    if (userid !== null || userid !== "") {
      getUserUpdate();
    }
  }, [userid]);

  // const handleClose = () => {
  //   setOpen(true);
  // };

  const updateUserfnameInput = (e) => {
    const temp = { ...userData };
    temp.first_name = e.target.value;
    setUserData(temp);
  };

  const updateUserlnameInput = (e) => {
    const temp = { ...userData };
    temp.last_name = e.target.value;
    setUserData(temp);
  };
  const updateUseremailInput = (e) => {
    const temp = { ...userData };
    temp.email = e.target.value;
    setUserData(temp);
  };

  async function getUserUpdate() {
    const res = await axios.get(`https://reqres.in/api/users/ ${userid}`);
    console.log(res);
    const tempObj = { ...res.data.data };
    setUserData(tempObj);
    setOpen(!open);
  }

  async function saveData() {
    setLoading(true);
    let data = { ...userData };
    const res = await fetch("https://reqres.in/api/users/2", {
      method: "PUT",
      headers: {
        Accept: "Application/json",
        "content-type": "Application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          setError(true);
        }
      })
      .then((response) => {
        console.log("", response);
        console.log(response.data);
        setUserData({ ...response });
        setUpdate(!update);
        setLoading(false);
        toast.success("Your data has been successfully updated", {
          position: "top-center",
        });
      });
  }
  return (
    <>
      {open ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Typography variant="h4" component="h4">
              User ID : {userData.id}
            </Typography>
            {update ? (
              <TextField
                value={userData.first_name}
                onChange={updateUserfnameInput}
                fullWidth
                required
              />
            ) : (
              `First Name : ${userData.first_name}`
            )}

            <br />
            <br />
            {update ? (
              <TextField
                value={userData.last_name}
                onChange={updateUserlnameInput}
                fullWidth
                required
              />
            ) : (
              `Last Name : ${userData.last_name}`
            )}

            <br />
            <br />
            {update ? (
              <TextField
                value={userData.email}
                onChange={updateUseremailInput}
                fullWidth
                required
              />
            ) : (
              `Email ID : ${userData.email}`
            )}

            <br />
            <br />
            {loading ? (
              <Button
                disabled
                type="submit"
                color="error"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Loading...
              </Button>
            ) : (
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                onClick={saveData}
              >
                Save
              </Button>
            )}

            <ToastContainer />
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default Userupdate;
