import React from "react";
import { Outlet } from "react-router";
import  { useState, useEffect } from 'react';
import axios from  'axios';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router';
import EditForm from "../components/EditForm";

function EditEntry() {
  const [entryData, setEntryData] = useState([]);
  // Pull id
  const { id } = useParams();
  const entriesUrl = "/api/entries/"+id ;
  
  useEffect(() => {
    getEntriesDataWithAxios();
  }, []);
  // Request specific row of data from db
  const getEntriesDataWithAxios = async () => {
    const response = await axios.get(entriesUrl);
    setEntryData(response.data);
    // console.log(response.data)
  };
  
  {/* map through entrData function */}
  return (
    <>
    {entryData.map((item) => (
      <EditForm 
      key={item.id}
      id={item.id}
      title={item.title}
      entry={item.entry}
      hours={item.hours}
      language={item.language_id}
      framework={item.framework_id}
      notes={item.notes}
      date={item.date}/>
    ))}
     </> 
  )
}

export default EditEntry;