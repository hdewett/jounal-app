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
      entriesPerDay: []

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
      <>
      <div class="flex">

        {/* how many times we use a specific language */}
      <div class="flex h-96 w-1/2 bg-red-300 justify-center items-center">
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
      </div>

        {/* Counter */}

      <div class="flex h-96 w-1/2 bg-blue-300 justify-center items-center">
      <p1>two</p1>
      </div>


        {/* hours spent studying per day */}

      </div>
      <div class="flex">
      <div class="flex h-96 w-1/2 bg-yellow-300 justify-center items-center">
          <div className="stat-title">Hours</div>
          <div className="stat-value">{loadData.hours}</div>
          <div className="stat-desc">Total Hours</div>
      </div>

        {/* number of entries per day */}
      <div class="flex h-96 w-1/2 bg-green-300 justify-center items-center">
      <p1>four</p1>
      </div>
      </div>

  <Outlet />
   </>
  
    )
}



export default Stats;