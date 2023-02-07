import React, { useState } from "react";
import Calendar from "react-calendar";
import EntriesTable from "../components/EntriesTable";
import { Outlet } from "react-router";
import 'react-calendar/dist/Calendar.css';

function Dashboard() {

  return (
<div className="flex flex-col w-full h-screen border-opacity-50 px-14">

  <div className="flex items-center w-full mt-5">
    <h2 className="font-bold text-3xl">Entries</h2>
  </div>
  <EntriesTable />
  <Outlet />
</div>

  )
}

export default Dashboard;