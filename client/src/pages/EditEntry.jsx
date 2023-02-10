import React from "react";
import  { useState, useEffect } from 'react';
import axios from  'axios';
import { useParams } from 'react-router';
import EditForm from "../components/EditForm";
import EntryForm2 from "../components/EntryForm2";

function EditEntry() {
  const [entryData, setEntryData] = useState([]);
  // Pull id
  const { id } = useParams();
  const entriesUrl = "/api/entries/" + id ;
  
  useEffect(() => {
    getEntriesDataWithAxios();
  }, []);
  // Request specific row of data from db
  const getEntriesDataWithAxios = async () => {
    const response = await axios.get(entriesUrl);
    setEntryData(response.data);
    console.log(entryData);
  };
  
  {/* map through entrData function */}
  return (
    <>
    {entryData.map((item) => (
      <EntryForm2 
      key={item.id}
      id={item.id}
      title={item.title}
      entry={item.entry}
      hours={item.hours}
      private={item.private}
      language={item.language_id}
      framework={item.framework_id}
      notes={item.notes}
      date={item.date}/>
    ))}
     </> 
  )
}

export default EditEntry;