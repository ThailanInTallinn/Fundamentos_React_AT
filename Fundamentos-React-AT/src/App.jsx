import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{ path: "/", element: <App /> }]);

export default function App() {
  return <div className="App"></div>;
}
