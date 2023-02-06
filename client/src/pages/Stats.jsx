import React from "react";
import { Outlet } from "react-router";

function Stats() {
  return (
    <div className="stats">
      <h1>Stats</h1>
      <Outlet />
    </div>
  )
}

export default Stats;