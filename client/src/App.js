
import React, { useState, useEffect} from 'react';
import axios from  'axios';
import EntriesTable from './components/EntriesTable';
import './App.css';

const entriesUrl = "/api/entries";

function App() {

const [entriesData, setEntriesData] = useState([]);

useEffect(() => {
  getEntriesDataWithAxios();
}, []);

const getEntriesDataWithAxios = async () => {
  const response = await axios.get(entriesUrl);
  setEntriesData(response.data);
};

  return (
    <div className="App" data-theme="emerald">
      <EntriesTable />
      <div className=''>
        {entriesData.map((entry) => {
          return <p key={entry.id}><span className='text-2xl font-bold'>{entry.id}:</span> {entry.body}</p>
        })}
        Hello World!
      </div>
    </div>
  );
}

export default App;
