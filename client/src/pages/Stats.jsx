import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router";
import { Chart } from "react-google-charts";

//as opposed to many maps
// const func=(key)=>{
//   {
//   loadData.distnctLanguage.map
//   ((language)=>{
//   return language[key]
//   }
  
//   } 
  const entriesUrl = "/api/stats";

  function Stats (props){
    const [loadData, setLoadData] = useState({
      hours:0,
      languages: [],
      distinctLanguage: [],

    });
    console.log("DISTINCT LANGUAGE HERE", loadData.distinctLanguage)

    useEffect(() => {
      getEntriesDataWithAxios();
    }, []);
    
    const getEntriesDataWithAxios = async () => {
      const response = await axios.get(entriesUrl)
      setLoadData(response.data)}

  
    return(
      <>
      <section class="h-96 w-1/4 flex justify-center items-center pl-24"><div className = "flex pt-10">
      <div className="stats stats-vertical shadow">
  
      <div className="stat">
        <div className="stat-title">Total Words</div>
        <div className="stat-value">31K</div>
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

    {console.log("TEST",loadData.distinctLanguage)}

  <h1>{loadData.distinctLanguage.map((language) => {
    return (
      language.language_name
    )
  }
  )}</h1>

  <h1>{loadData.distinctLanguage.map((language) => {
    return (
      language.language_amount
    )
  }
  )}</h1>


  
{/* 
<p>{loadData.distinctLanguage[0].language_name} {loadData.distinctLanguage[0].language_amount} times</p><progress className="progress w-56" value={loadData.distinctLanguage[0].language_amount} max="10"></progress>

<p>{loadData.distinctLanguage[1].language_name} {loadData.distinctLanguage[1].language_amount} times</p>
<progress className="progress w-56" value={loadData.distinctLanguage[1].language_amount} max="10"></progress>

<p>{loadData.distinctLanguage[2].language_name} {loadData.distinctLanguage[2].language_amount} times</p>
<progress className="progress w-56" value={loadData.distinctLanguage[2].language_amount} max="10"></progress> */}

   
   
  <Outlet />
   </>
    )
}



export default Stats;