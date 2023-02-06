import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import SideNav from "./components/SideNav";
import Dashboard from "./routes/Dashboard";
import NewTask from "./routes/NewTask";
import "./App.css";
import Entries from "./routes/Entries";

const AppLayout = () => (
  <>
  <SideNav/>
  <Outlet/>
  </>
)

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children : [
      {
        path: "/",
        element: <Dashboard/>
      },
      {
        path: "newTask",
        element: <NewTask />,
      },
      {
        path: "newentry",
        element: <Entries />,
      },
    ]

  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);