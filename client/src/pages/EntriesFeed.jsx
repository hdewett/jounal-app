import React from "react";
import { Outlet } from "react-router";
import EntriesFeed from "../components/EntriesFeed";

function EntriesFeeds() {
  return (
    
    <div className="EntriesFeed">
      <h1>NEW entry</h1>
      <EntriesFeed />
      <Outlet />
    </div>
  )
}

export default EntriesFeeds;