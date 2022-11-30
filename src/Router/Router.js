import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login"
import Catorgory from "../Pages/Catorgory/Catorgory";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import MyProduct from "../Pages/Dashboard/MyOder";
import Checkout from "../Pages/Catorgory/Checkout";
import BecomeASeller from "../Pages/Dashboard/BecomeASeller";
import AllUser from "../Pages/Dashboard/AllUser";


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
        path: "/checkout/",
        loader: ({ params }) =>
          fetch(`http://localhost:4000/product/${params.id}`),

        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <MyProduct></MyProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/becomeaseller",
        element: (
          <PrivateRoute>
            <BecomeASeller></BecomeASeller>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allusers",
        element: (
          <PrivateRoute>
           <AllUser></AllUser>
          </PrivateRoute>
        ),
      },
    ],
  },
]);