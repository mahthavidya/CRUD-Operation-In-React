import UserDashboard from "./Components/UserDashboard";
import Userupdate from "./Components/Userupdate";

const routes = [
  {
    path: "/allUsers",
    element: <UserDashboard />,
  },
  {
    path: "/allUsers/userupdate",
    element: <Userupdate />,
  },
];

export default routes;
