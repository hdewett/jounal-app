import React from "react";
import { Outlet } from "react-router";

function Entries() {
  return (
    <div className="entries px-14">
      <h1>Entries</h1>
      <Outlet />
    </div>
  )
}

export default Entries;