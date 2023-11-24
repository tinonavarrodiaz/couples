import { createBrowserRouter } from "react-router-dom";
import Template from "../components/templates/Template";
import Home from "../components/pages/Home";
import Couple from "../components/pages/Couple";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/couple/:slug",
        element: <Couple/>
      }
    ]
  },
  {
    path: "*",
    element: <h1>Página No encontrada</h1>
  }
])
