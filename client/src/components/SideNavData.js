import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs"

export const SideNavData = [
  {
    title: "Dashboard",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Journal",
    path: "/entries",
    icons: <BsIcons.BsJournalCode />,
    cName: "nav-text",
  },
  {
    title: "New Entry",
    path: "/newentry",
    icons: <AiIcons.AiOutlinePlus />,
    cName: "nav-text",
  },
  {
    title: "New Task",
    path: "/newTask",
    icons: <FaIcons.FaTasks />,
    cName: "nav-text",
  },
  {
    title: "Stats",
    path: "/stats",
    icons: <IoIcons.IoMdStats />,
    cName: "nav-text",
  },

]