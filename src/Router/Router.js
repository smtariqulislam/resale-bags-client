import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login"
import Catorgory from "../Pages/Catorgory";
import Dashboard from "../Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

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
    ],
  },

  {
    path: "/dashboard",
    element: (
    
       <Dashboard></Dashboard>
     
    ),
    children: [
     
     
    ],
  },
]);