import React from "react";
import { Outlet } from "react-router";

function NewEntry() {
  return (
    <div className="newEntry">
      <h1>new entry</h1>
      <Outlet />
    </div>
  )
}

export default NewEntry;