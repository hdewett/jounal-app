import React from "react";
import Calendar from "react-calendar";
import { Outlet } from "react-router";

function Dashboard() {
  return (
<div className="flex flex-col w-full h-screen border-opacity-50">
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Entries</div>
    <h2> a table goes here</h2>
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Calendar</div>
  <Calendar />
  <Outlet />
</div>

  )
}

export default Dashboard;