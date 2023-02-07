import React from "react";
import { Outlet } from "react-router";

function EntriesFeed() {
  return (
    
    <div className="EntriesFeed">
      <h1>NEW entry</h1>
      <Outlet />
    </div>
  )
}

export default EntriesFeed;