import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Details from "./pages/details/details";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/details/:id", element: <Details /> },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
