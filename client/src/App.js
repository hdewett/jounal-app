import React, { useState, useEffect} from 'react';
import axios from  'axios';
import logo from './logo.svg';
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
    <>
    <div className="App" data-theme="emerald">
      <header className="App-header">
        <button className="btn btn-primary">Click</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <div className='bg-white text-black'>
      {entriesData.map((entry) => {
        return <p key={entry.id}><span className='text-2xl font-bold'>{entry.id}:</span> {entry.body}</p>
      })}
      Hello World!
    </div>
    </>
  );
}

export default App;
