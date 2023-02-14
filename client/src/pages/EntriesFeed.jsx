import { Outlet } from "react-router";
import EntriesTable from "../components/EntriesTable"


function EntriesFeeds() {
  return (
    <div className="flex flex-col w-full h-screen border-opacity-50 px-14">
    <div className="flex items-center w-full mt-5">
      <h2 className="font-bold text-3xl mb-4">Journal Feed</h2>
    </div>
    <EntriesTable />
    <Outlet />
  </div>
  )
}

export default EntriesFeeds;

