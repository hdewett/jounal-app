import React, {useState} from "react";
import TopNav from "./TopNav";
import { Outlet, Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";

function SideNavBar() {
  // const [btnState, setBtnState] = useState({
  //   1:false,
  //   2:false,
  //   3:false,
  //   4:false,
  //   5:false
  // });

  // function handleClick () {
  //   setBtnState(btnState => !btnState);
  // }

  // function toggleActive (id) {
  //   !btnState.id ? setBtnState(id, "active") : setBtnState({id: false});
  //   console.log(btnState);
  // }

  // let toggleClassCheck = btnState ? "active":null;

  return (
    
    <div className="drawer drawer-mobile">
      
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
  <TopNav />
  <Outlet />
  </div> 

  <div className="drawer-side">
    
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-50 bg-base-200  text-base-content">
    <a className="btn btn-ghost normal-case text-xl text-primary">Codeful</a>
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/"><AiIcons.AiFillHome /> Dashboard</Link></li>
      <li><Link to="/entries"><BsIcons.BsJournalCode />Journal</Link></li>
      <li><Link to="/newentry"><AiIcons.AiOutlinePlus />New Entry</Link></li>
      <li><Link to="/entriesfeed"><FaIcons.FaTasks />Entries Feed</Link></li>
      <li><Link to="/stats"><IoIcons.IoMdStats />Stats</Link></li>

      {/* {SideNavData.map((item, index) => {
            return (
              <li key = {index} className={item.cName}>
                <Link to={item.path} className={`${toggleClassCheck}`} onClick={handleClick}>
                  {item.icons}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })} */}
    </ul>
  
  </div>

</div>
  )
}

export default SideNavBar