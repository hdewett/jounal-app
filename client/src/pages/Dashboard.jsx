import React from "react";
import Calendar from "react-calendar";
import EntriesTable from "../components/EntriesTable";
import { Outlet } from "react-router";

function Dashboard() {
  return (
<div className="flex flex-col w-full h-screen border-opacity-50">
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Calendar</div>
  <Calendar />
  <div className="flex justify-start text-3xl w-2/3 mt-5 font-bold">
    Entries
  </div>
  <EntriesTable />
  <Outlet />
</div>

  )
}

export default Dashboard;