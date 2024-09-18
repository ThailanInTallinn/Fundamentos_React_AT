import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/home";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

export default function App() {
  return <div className="App"></div>;
}
