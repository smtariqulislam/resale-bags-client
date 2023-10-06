import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Catorgory from "../Pages/Catorgory/Catorgory";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Checkout from "../Pages/Catorgory/Checkout";
import BecomeASeller from "../Pages/Dashboard/BecomeASeller";
import AllUser from "../Pages/Dashboard/AllUser";
import Wecome from "../Pages/Dashboard/Wecome";
import MyOder from "../Pages/Dashboard/MyOder";
import AllBookings from "../Pages/Dashboard/AllBookings";
import AddCatogory from "../Pages/Dashboard/AddCatogory";
import SellerRoute from "./SellerRoute";
import AdminRouter from "./AdminRouter";
import ManageProduct from "../Pages/Dashboard/ManageProduct";
import Product from "../Pages/Catorgory/Product";
import About from "../Pages/About";

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
        path: "/catorgory",

        element: <Catorgory></Catorgory>,
      },
      {
        path: "/catorgory/:id",
        loader: ({ params }) =>
          fetch(`https://server-site-psi.vercel.app/product/${params.id}`),
        element: <Product></Product>,
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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/checkout/",
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
        path: "",
        element: (
          <PrivateRoute>
            <Wecome></Wecome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/order",
        element: (
          <PrivateRoute>
            <MyOder></MyOder>
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
        path: "all-users",
        element: (
          <AdminRouter>
            <AllUser></AllUser>
          </AdminRouter>
        ),
      },
      {
        path: "all-oders",
        element: (
          <AdminRouter>
            <AllBookings></AllBookings>
          </AdminRouter>
        ),
      },
      {
        path: "add-product",

        element: (
          <SellerRoute>
            <AddCatogory></AddCatogory>
          </SellerRoute>
        ),
      },
      {
        path: "manage-product",
        element: (
          <SellerRoute>
            <ManageProduct></ManageProduct>
          </SellerRoute>
        ),
      },
    ],
  },
]);
