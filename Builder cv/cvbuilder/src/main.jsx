import React from "react";
import App from "./App.jsx";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import Dashbroad from "./assets/components/Dashbroad";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sign from "./assets/components/Sign";
import Signup from "./assets/components/Signup";
import Cv from "./assets/components/Cv";
import Leading from "./assets/components/Leading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Leading />,
  },
  {
    path: "/dash",
    element: <Dashbroad />,
  },
  {
    path: "/sign",
    element: <Sign />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/cv",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
