import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../Redux/index";
import { useNavigate } from "react-router-dom";

const Userlogin = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uToken = useSelector((state) => state.loginStatusReducer);

  useEffect(() => {
    userData();
  }, []);

  async function userData() {
    const res = await fetch("https://reqres.in/api/users?page=2");
    const response = await res.json();
    console.log(response.data);
    setUsers(response.data);
  }

  const deleteT = () => {
    console.log("Delete Token");
    dispatch(deleteToken());
    navigate("/");
  };

  return (
    <>
      <div className="app-container">
        <Button variant="outlined" onClick={deleteT}>
          Log Out
        </Button>
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>ID</td>
              <td>First_Name</td>
              <td>Last_Name</td>
              <td>Email</td>
              <td>UserInfo</td>
            </tr>
          </thead>
          <tbody>
            {users.map((e, i) => {
              return (
                <>
                  <tr>
                    <td>{i}</td>
                    <td>{e.id}</td>
                    <td>{e.first_name}</td>
                    <td>{e.last_name}</td>
                    <td>{e.email}</td>
                    <td>
                      <Link to="/allUsers/userupdate" state={e.id}>
                        Update
                      </Link>
                    </td>
                    <td>
                      <Link to="#" state={e.id}>
                        Delete
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Userlogin;
