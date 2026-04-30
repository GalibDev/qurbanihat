import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "animate.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AllAnimals from "./pages/AllAnimals";
import AnimalDetails from "./pages/AnimalDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile";
import UpdateProfile from "./pages/UpdateProfile";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/animals",
        element: <AllAnimals />,
      },
      {
        path: "/details-page/:id",
        element: (
          <PrivateRoute>
            <AnimalDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-center" />
    <RouterProvider router={router} />
  </React.StrictMode>
);