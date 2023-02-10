import React, { useState, useEffect } from "react";
import EntriesTable from "../components/EntriesTable";
import { Outlet } from "react-router";
import 'react-calendar/dist/Calendar.css';
import CalendarSmall from "../components/CalendarSmall";
import axios from "axios";
import { wordCount } from "../helpers/wordCount";

function Dashboard() {

  const entriesUrl = "/api/stats";

  const [loadData, setLoadData] = useState({
    hours:0,
    languages: [],
    distinctLanguage: [],
    entries:[],

  });

  const [totalWords, setTotalWords] = useState(0)
  console.log(loadData);
  useEffect(() => {
    getEntriesDataWithAxios();
  }, []);
 

  useEffect(() => {
    getEntriesDataWithAxios();
  }, []);
  
  const getEntriesDataWithAxios = async () => {
    const response = await axios.get(entriesUrl);
    setLoadData(response.data);
    let total = 0
    for (const word of response.data.entries ) {
      total+= wordCount(word.entry)
     

    }
    setTotalWords(total)
  };

  return (
    <main class="flex h-full w-full flex-col px-14 my-10">
    <div class="flex h-auto w-full mb-28">
      {/* <!-- Calendar component --> */}
      
      <section class="h-96 w-3/4 flex justify-center items-center"><CalendarSmall /></section>
      {/* <!-- Stats component--> */}
      <section class="h-96 w-1/4 flex justify-center items-center pl-24"><div className = "flex pt-10">
      <div className="stats stats-vertical shadow">
  
      <div className="stat">
        <div className="stat-title">Total Words</div>
        <div className="stat-value">{totalWords}</div>
        <div className="stat-desc">Words Typed</div>
      </div>
      
      <div className="stat">
        <div className="stat-title">Languages</div>
        <div className="stat-value">{loadData.languages.length}</div>
        <div className="stat-desc">Languages Used</div>
      </div>
      
      <div className="stat">
        <div className="stat-title">Hours</div>
        <div className="stat-value">{loadData.hours}</div>
        <div className="stat-desc">Total Hours</div>
      </div>
  
       </div>
     </div></section>
    </div>
    {/* <!-- Entries --> */}
    <div>
    <h2 className="font-bold text-3xl">Entries</h2>
    <EntriesTable />
    <Outlet />
    </div>
  </main>
  )
}

export default Dashboard;