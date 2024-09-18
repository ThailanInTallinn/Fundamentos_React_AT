import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/home";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
