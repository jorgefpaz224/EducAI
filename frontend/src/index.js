import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/*Import pages*/
import Login from "./pages/Login";
import NuestrosServicios from "./pages/NuestrosServicios";
import NotFound from "./pages/NotFound";
import MainContent from "./MainContent";
import Bienvenida from "./pages/Bienvenida";
import Tutorias from "./pages/Tutorias";
import AgendarTutorias from './pages/AgendarTutoria';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/main",
    element: <MainContent />,

    children: [
      {
        path: "/main",
        element: <Bienvenida />,
      },
      {
        path: "/main/nuestrosServicios",
        element: <NuestrosServicios />,
      },
      {
        path: "/main/tutorias",
        element: <Tutorias />,
      },
      {
        path: "/main/agendarTutorias",
        element: <AgendarTutorias />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
