import React, { useState, useEffect } from 'react';
import Entry from './Entry';
import axios from  'axios';
import { useLocation } from "react-router-dom";

const entriesUrl = "/api/entries/limit";
const entriesUrl2 = "/api/entries";

export default function EntriesTable(props) {

  const [entriesData, setEntriesData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getEntriesDataWithAxios();
  }, []);
  
  const getEntriesDataWithAxios = async () => {
    if (location.pathname === "/") {
      const response = await axios.get(entriesUrl);
      setEntriesData(response.data);
    } else {
      const response = await axios.get(entriesUrl2);
      setEntriesData(response.data);
    }
  };

  const handleDelete = async (id) => {
    setEntriesData(entriesData.filter((e) => e.id !== id))
    await axios.delete('/api/entries/' + id);
    console.log("Deleting Entry ID: ", id);
  }

  // Create Appointment components array.
  const entryArray = entriesData.map((entry) => {

    return <Entry
        key={entry.id}
        id={entry.id}
        title={entry.title}
        date={entry.date}
        handleDelete={handleDelete}
        />;
});


  return (
    <div className="overflow-x-auto">
    <table className="table w-full shadow-xl">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Date</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        { entryArray.length === 0 ? 'Sorry, there are currently no entries' : entryArray }
      </tbody>
    </table>
  </div>
  );
}