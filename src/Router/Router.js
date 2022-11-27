import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login"
import Catorgory from "../Pages/Catorgory/Catorgory";

import CatorgoryDetails from "../Pages/Catorgory/CatorgoryDetails";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/catorgory",
        element: <Catorgory></Catorgory>,
      },
      {
        path: "/catorgory/:id",
        loader: ({ params }) => fetch(`data.json/`),

        element: <CatorgoryDetails></CatorgoryDetails>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [{
      path:'/dashboard',
      element:<Dashboard></Dashboard>
    }],
  },
]);