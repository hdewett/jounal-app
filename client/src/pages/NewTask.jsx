import React from "react";
import { Outlet } from "react-router";

function NewTask() {
  return (
    <div className="newTask">
      <h1>New Task</h1>
      <Outlet />
    </div>
  )
}

export default NewTask;