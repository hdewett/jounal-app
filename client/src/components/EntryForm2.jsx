import React from 'react';
import { useState } from 'react';
import axios from  'axios';
import { useNavigate } from "react-router-dom";
import TinyMCE from '../components/TinyMCE.jsx';
import DeleteEntry from './DeleteEntry.jsx';


const EntryForm2 = (props) => {

  const navigate = useNavigate();

  // Formats and sets the default value of the date picker to today's date.
  const today = new Date();
  const date = today.setDate(today.getDate()); 
  const defaultDateValue = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd

  const [newEntry, setnewEntry] = useState({
    title: props.title ? props.title : null,
    date: props.date ? props.date : defaultDateValue,
    entry: props.entry ? props.entry : null,
    private: props.private === false ? props.private : true,
    hours: props.hours ? props.hours : null,
    language: props.language ? props.language : null,
    framework: props.framework ? props.framework : null,
    notes: props.notes ? props.notes : null,
  });

  const updateEntry = (key, value) => {
    setnewEntry((prev) =>{
      return {...prev, [key]:value}
    })
  }

  const handleDelete = async (id) => {
    await axios.delete('/api/entries/' + id);
    navigate("/entries")
    console.log("Deleting Entry ID: ", id);
  }


  // Updates existing entry record
  // or creates new entry record

  const save = () => {
    if (props.id) {
      axios.put(`/api/entries/${props.id}`, newEntry)
      .then((response) => {
        navigate("/entries")
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      // Use post if its a new entry
      axios.post('/api/entries', newEntry)
      .then((response) => {
        navigate("/entries")
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }
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
        <select 
          className="select select-bordered w-auto max-w-xs" 
          name="private" 
          id="private"  
          value={newEntry.private}  
          onChange={(event) => updateEntry("private", event.target.value)}>
            <option disabled selected>Entry Visibilty</option>
            <option value={true}>Private</option>
            <option value={false}>Public</option>
        </select>
        </div>
        <div className="w-full px-10">
            <TinyMCE updateEntry={updateEntry} existingValues={props.entry}/>
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
        <div className='flex w-2/3 justify-center mt-5 mb-10 gap-x-3'>
          <button type="submit" className="btn btn-primary w-32">Save</button>
          <DeleteEntry
            key={props.id}
            id={props.id}
            handleDelete={handleDelete}
          />
          {props.id ? 
            <label htmlFor={'my-modal-' + props.id}  className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </label> : null}
        </div>
      </form>
      </div>
      </>
  )
}

export default EntryForm2;