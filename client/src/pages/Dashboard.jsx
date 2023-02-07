import React, { useState } from "react";
import Calendar from "react-calendar";
import EntriesTable from "../components/EntriesTable";
import { Outlet } from "react-router";

function Dashboard() {

  return (
<div className="flex flex-col w-full h-screen border-opacity-50">
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Calendar</div>
  <Calendar />
  <div className="flex items-center w-full mt-5">
    <h2 className="font-bold text-3xl">Entries</h2>
  </div>
  <EntriesTable />
  <Outlet />
</div>

  )
}

export default Dashboard;