import React from "react";
// import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
// import Login from "./Components/Login";
// import Userdetails from "./Components/Userdetails";
import Userlogin from "./Components/Userlogin";
// import MyComp from "./Components/MyComp";
import { useSelector } from "react-redux";
import unProtectedRoutes from "./unProtectedRoutes";
import ProtectedRoutes from "./protectedRoutes";

// const MyComp = lazy(() => import("./Components/MyComp"));

const App = () => {
  const selector = useSelector((state) => state.loginStatusReducer);
  {
    return (
      <>
        {/* //   <Suspense fallback={<div>loading....</div>}>
      // <MyComp />
      // </Suspense> */}
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

  /* 
  //   super();
  //   console.log("constructor");
  //   this.state = { */

  //     data: 0,
  //   };
  // }
  // static getDerivedStateFromProps() {
  //   console.log("getDerivedStateFromProp");
  // }
  // componentDidMount() {
  //   console.log("componentDidMount");
  // }
  // apple() {
  //   this.setState({ data: this.state.data + 1 });
  // }
  // render() {
  //   console.log("render");
  //   return (
  //     <div>
  //       <h1>{this.state.data}</h1>
  //       <button onClick={() => this.apple()}> Update data</button>
  //     </div>
  //   );
  // }
};
export default App;
