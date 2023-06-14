import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import AddCoffe from './Components/AddCoffe.jsx';
import UpdateCoffe from './Components/UpdateCoffe.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "addCoffe",
    element: <AddCoffe></AddCoffe>,
  },
  {
    path: "updateCoffe",
    element: <UpdateCoffe></UpdateCoffe>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    <RouterProvider router={router} />
  </React.StrictMode>
);
