import React, { useState, useEffect } from "react";
import { Grid, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const paperStyle = {
    padding: 20,
    height: "250px",
    width: 300,
    margin: "20px auto",
    align: "center",
  };
  const [users, setUsers] = useState({
    all_users: [],
    page: 1,
    record_per_page: 0,
    total: 0,
    App_dev: "Vidya Bharti",
  });

  useEffect(() => {
    console.log("USERS HOOK", users);
  });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch(`https://reqres.in/api/users?page=${users.page}`);
    const response = await res.json();
    console.log(response);
    const tempObj = { ...users };
    // const temp = [...response.data];
    console.log(tempObj);
    const tempArr = [];
    response.data.forEach((e) => {
      tempArr.push(e);
    });
    tempObj.all_users = tempArr;
    tempObj.page = response.page;
    tempObj.record_per_page = response.per_page;
    tempObj.total = response.total;
    setUsers(tempObj);
  }

  return (
    <>
      {users.all_users.map((e, i) => {
        return (
          <>
            <Grid>
              <Paper elevation={10} style={paperStyle}>
                <p>key:{i}</p>
                <p>id:{e.id}</p>
                <p>
                  First_Name:
                  {e.first_name}
                </p>
                <p>last_name:{e.last_name}</p>
                <p>Email:{e.email}</p>
                {/* <Link to="/userdetails">
                  <Button> CLick</Button>
                </Link> */}
                <Link to="/allUsers/userdetails" state={e.id}>
                  UserDetailInfo
                </Link>
              </Paper>
            </Grid>
          </>
        );
      })}
    </>
  );
};
export default Dashboard;
