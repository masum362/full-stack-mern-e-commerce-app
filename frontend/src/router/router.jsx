import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../pages/error/Error";
import PrivateRoutes from "../components/private/PrivateRoutes";
import Admin from "../pages/Admin/Admin";
import Dashboard from "../components/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      }, {
        path: "/login",
        element: <Login />
      }, {
        path: "/register",
        element: <Register />
      }, {
        path: "/admin-panel",
        element: <PrivateRoutes><Admin /></PrivateRoutes>,
        children:[
        {
          path:"/admin-panel",
          element:<Dashboard />
        }
        ]

      }
    ],
  },
]);
