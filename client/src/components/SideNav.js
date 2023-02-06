import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom";
import {SideNavData} from "./SideNavData.js"
import {IconContext} from "react-icons"

function SideNav() {

  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(sidebar)
  
  return (
    <>
    <IconContext.Provider value = {{color: "undefined"}}>

    
      <div className="sidenav">
        <Link to ="#" className = "menu-bars">
        <FaIcons.FaBars OnClick = {showSidebar} />
        </Link>

      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick = {showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SideNavData.map((item, index) => {
            return (
              <li key = {index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default SideNav