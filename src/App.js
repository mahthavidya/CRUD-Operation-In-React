import React from "react";
import { Route, Routes } from "react-router-dom";
import Userlogin from "./Components/Userlogin";
import { useSelector } from "react-redux";
import unProtectedRoutes from "./unProtectedRoutes";
import ProtectedRoutes from "./protectedRoutes";

const App = () => {
  const selector = useSelector((state) => state.loginStatusReducer);
  {
    return (
      <>
        <Routes>
          {selector.token &&
            ProtectedRoutes.map((el) => {
              return <Route exact {...el} />;
            })}
          {unProtectedRoutes.map((el) => {
            return <Route {...el} />;
          })}
        </Routes>
      </>
    );
  }
};
export default App;
