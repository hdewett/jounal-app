import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router";
import { Chart } from "react-google-charts";
import { wordCount } from "../helpers/wordCount";

  const entriesUrl = "/api/stats";

  function Stats () {
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
    
     
    let hoursArr = [["Date", "Hours"]]
    loadData.hoursPerDay.map((hours) => hoursArr.push([hours.date, parseInt(hours.sum)]))
    

    let hoursOptions = {
      title: "Number of Hours Per Day Journaled",
      colors: ['#ea5234']
    }


    let distinctLanguageArr = [["Languages", "Times Used"]]
    loadData.distinctLanguage.map((language) =>distinctLanguageArr.push([language.language_name, parseInt(language.language_amount)]))

    let distinctLanguageOptions = {
      title: "Number of Hours Per Language",
      pieHole: 0.4,
      colors: ['#55cb8f', '#1fc99a', '#00c5ad', '#00bfc2', '#00b8d7', '#00b0ea', '#00a7f9', '#009bff', '#008dff', '#377cfa']
    };

    let entriesPerDayArr = [["Days", "Entries"]]
    loadData.entriesPerDay.map((entry) => entriesPerDayArr.push([entry.date, parseInt(entry.count)]))

    let entriesPerDayOptions = {
      title: "Number of Entries Per Day",
      colors: ['#377cfb']
    }
    
    
    return (
      <>
      <span className="pb-2 pl-14 text-2xl font-semibold">February 2023</span>
      <div class="flex">
        <div class="flex h-96 w-1/2 items-center justify-center">
          {/* number of entries per day */}
          <Chart
          chartType="LineChart"
          data={entriesPerDayArr}
          options={entriesPerDayOptions}
          width={"100%"}
          height={"400px"}
        />
        </div>
        <div class="flex h-96 w-1/2 items-center justify-center">
          {/* how many times we use a specific language */}
          <Chart
            chartType="PieChart"
            data={ distinctLanguageArr}
            options={distinctLanguageOptions}
            width={"100%"}
            height={"400px"}
          />

        </div>
      </div>

      <div class="flex">
        <div class="flex h-96 w-1/2 items-center justify-center">
           {/* hours spent studying per day */}
          <Chart
            chartType="BarChart"
            data={ hoursArr}
            options={hoursOptions}
            width={"100%"}
            height={"400px"}
          />
        </div>
        

       
        <div class="flex h-96 w-1/2 items-center justify-center mr-36">
           {/* Total Words Counter */}
          <div classname="flex">
            <div className=" flex w-full justify-start">
              <span className="font-semibold text-sm text-black pl-4">Total Words Typed This Month</span>
              </div>
            <div className="stat-value text-9xl">{totalWords}</div>
            <div className="stat-desc text-lg text-black font-bold pl-[62px]">Words Typed</div>
    
          </div>
        </div>
      </div>
  <Outlet />
   </>
  
    )
}



export default Stats;