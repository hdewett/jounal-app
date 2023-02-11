import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router";
import { Chart } from "react-google-charts";
import { wordCount } from "../helpers/wordCount";

  const entriesUrl = "/api/stats";

  function Stats (props){
    const [loadData, setLoadData] = useState({
      hours:0,
      languages: [],
      distinctLanguage: [],
      entries: [],
      entriesPerDay: [],
      hoursPerDay: []

    });

    const [totalWords, setTotalWords] = useState(0)
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
    
     // 
    let hoursArr = [["Date", "Hours"]]
    loadData.hoursPerDay.map((hours) => hoursArr.push([hours.date, parseInt(hours.sum)]))
    console.log(hoursArr)

    let distinctLanguageArr = [["Languages", "Times Used"]]
    loadData.distinctLanguage.map((language) =>distinctLanguageArr.push([language.language_name, parseInt(language.language_amount)]))

    // let entriesPerDayArr = [["Entries", "Days"]]
    // loadData.entriesPerDay.map((entry) => entriesPerDayArr.push([entriesPerDay.date, entriesPerDay.count]))
    
    
    return (
      <>
      <div class="flex">
      <div class="flex h-96 w-1/2 bg-red-300 justify-center items-center">

        {/* how many times we use a specific language */}
        <Chart
      chartType="PieChart"
      data={ distinctLanguageArr}
     
      width={"100%"}
      height={"400px"}
    />
    </div>


      {/* <div class="flex h-96 w-1/2 bg-red-300 justify-center items-center">
        <p>{loadData.distinctLanguage.map((language) => {
          return (
            <>
            <p>{language.language_name}</p>
            <progress className="progress w-56" value= {language.language_amount} max="10"></progress>
            </>
          )
        }
        )}
        </p>
      </div> */}

        {/* Counter */}

      <div class="flex h-96 w-1/2 bg-blue-300 justify-center items-center">
      <p1>two</p1>
      </div>


       {/* hours spent studying per day */}

        <div class="flex h-96 w-1/2 bg-yellow-300 justify-center items-center">
        <Chart
      chartType="BarChart"
      data={ hoursArr}
     
      width={"100%"}
      height={"400px"}
    />
        {/* <p>{loadData.hoursPerDay.map((hours) => {
          return (
            <>
            <p>{hours.sum}</p>
            <progress className="progress w-56" value= {hours.hoursPerDay} max="10"></progress>
            </>
            )
          }
          )}
        </p> */}
        </div> 

      {/* </div>
      <div class="flex">
      <div class="flex h-96 w-1/2 bg-yellow-300 justify-center items-center">
          <div className="stat-title">Hours</div>
          <div className="stat-value">{loadData.hours}</div>
          <div className="stat-desc">Total Hours</div>
      </div> */}

        {/* number of entries per day */}
      <div class="flex h-96 w-1/2 bg-green-300 justify-center items-center">
      {/* <Chart
      chartType="BarChart"
      data={entriesPerDayArr}
     
      width={"100%"}
      height={"400px"}
    /> */}
      </div>
      </div>
    
  <Outlet />
   </>
  
    )
}



export default Stats;