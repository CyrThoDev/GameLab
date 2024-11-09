import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import * as React from "react";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import App from "./App";
import Ressources from "./pages/Ressources";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ressources",
        element: <Ressources/>,
      },
      {
        path: "game/:id",
        element: <GamePage />,
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
