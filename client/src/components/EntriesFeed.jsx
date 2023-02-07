import React, { useState, useEffect } from 'react';
import EntriesFeedItem from './EntriesFeedItem';
import axios from  'axios';

const entriesUrl = "/api/entries";

export default function EntriesTable(props) {

  const [entriesData, setEntriesData] = useState([]);

  useEffect(() => {
    getEntriesDataWithAxios();
  }, []);
  
  const getEntriesDataWithAxios = async () => {
    const response = await axios.get(entriesUrl);
    setEntriesData(response.data);
  };

  const handleDelete = async (id) => {
    setEntriesData(entriesData.filter((e) => e.id !== id))
    await axios.delete('/api/entries/' + id);
    console.log("Deleting Entry ID: ", id);
  }


  const entryArray = entriesData.map((entry) => {

    return <EntriesFeedItem
        key={entry.id}
        id={entry.id}
        title={entry.title}
        date={entry.date}
        body={entry.body}
   entry={entry.entry}
hours={entry.hours}
   language={entry.language}
  framework={entry.framework}
  notes={entry.notes}
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