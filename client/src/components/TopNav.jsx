import React from "react";
import { SideNavData } from "./SideNavData";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai"

function TopNav() {


  return (
    
<div className="navbar bg-base-100 border-b-2 border-base-200">
  <div className="flex-1">
    {/* Nav button */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><AiIcons.AiOutlineMenu /></label>
    {/* <a className="btn btn-ghost normal-case text-xl">Codeful</a> */}
  
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://e7.pngegg.com/pngimages/928/413/png-clipart-emoji-regional-indicator-symbol-computer-icons-fediverse-random-buttons-company-text.png" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default TopNav