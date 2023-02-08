import React from 'react';
import { useState } from 'react';
import axios from  'axios';
import { useNavigate } from "react-router-dom";
import TinyMCE from '../components/TinyMCE.jsx';


const NewEntry = ({setEntryFormData}) => {

  const navigate = useNavigate();

  // Formats and sets the default value of the date picker to today's date.
  const today = new Date();
  const date = today.setDate(today.getDate()); 
  const defaultDateValue = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd

  const [newEntry, setnewEntry] = useState({
    title: null,
    date: defaultDateValue,
    entry: null,
    hours: null,
    language: null,
    framework: null,
    notes: null,
  });


  const updateEntry = (key, value) => {
    setnewEntry((prev) =>{
      return {...prev, [key]:value}
    })
  }


  // Save entry to the db
  const save = () => {
    console.log("Current State: ", newEntry)
    axios.post('/api/entries', newEntry)
    .then((response) => {
      navigate("/entriesfeed")
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="mockup-code bg-primary text-primary-content mb-10">
          <pre data-prefix="1"><code>Create A New Journal Entry!</code></pre>
        </div>
        <form 
          className="flex flex-col justify-center items-center w-full" 
          onSubmit={((event) =>{
            event.preventDefault();
            save();})}>
        <div className="flex w-full justify-center gap-x-3 mb-10">
        <input 
          type="text" 
          placeholder="Entry Title"
          value={newEntry.title} 
          onChange={(event) => updateEntry("title", event.target.value)}
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input 
          type="date" 
          defaultValue={defaultDateValue}
          value={newEntry.date}  
          onChange={(event) => updateEntry("date", event.target.value)}
          className="input input-bordered w-full max-w-xs" 
        />
        </div>
        <div className="w-2/3">
            <TinyMCE />
        </div>
        <div className="w-2/3 flex gap-x-3 mt-3">
        <select 
          className="select select-bordered w-auto max-w-xs" 
          name="hours" 
          id="hours"  
          value={newEntry.language}  
          onChange={(event) => updateEntry("language", event.target.value)}>
            <option disabled selected>Language</option>
            <option value={1}>Javascript</option>
            <option value={2}>Python</option>
            <option value={3}>Java</option>
        </select>
        <select 
          className="select select-bordered w-auto max-w-xs"
          name="cars" 
          id="cars"  
          value={newEntry.framework}
          onChange={(event) => updateEntry("framework", event.target.value)}>
            <option disabled selected>Framework</option>
            <option value={1}>React</option>
            <option value={2}>Django</option>
            <option value={3}>Kotlin</option>
        </select>
        <select 
          className="select select-bordered w-auto max-w-xs"
          name="hours" 
          id="hours"  
          value={newEntry.hours}  
          onChange={(event) => updateEntry("hours", event.target.value)}>
            <option disabled selected>Hours Spent Studying</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        <input 
        type="text"
        placeholder="Additional Notes" 
        className="input input-bordered w-auto max-w-xs" 
        value={newEntry.notes}
        onChange={(event) => updateEntry("notes", event.target.value)}/>
        </div>
        <div className='flex w-2/3 justify-end mt-3 mb-10'>
          <button type="submit" className="btn btn-primary w-32">Save</button>
        </div>
      </form>
      </div>
      <TinyMCE className="tiny-mce" />
      </>
  )
}

export default NewEntry