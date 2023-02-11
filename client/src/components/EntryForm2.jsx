import React from 'react';
import { useState } from 'react';
import axios from  'axios';
import { useNavigate } from "react-router-dom";
import TinyMCE from '../components/TinyMCE.jsx';
import DeleteEntry from '../components/DeleteEntry';
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { FaJava, FaVuejs, FaLaravel } from "react-icons/fa";
import { DiPhp, DiRubyRough, DiCss3, DiHtml5, DiReact, DiAngularSimple } from "react-icons/di";
import { SiTypescript, SiRubyonrails, SiExpress, SiDjango, SiSvelte, SiKotlin, SiNextdotjs } from "react-icons/si";


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

  const updateCharCount = (values) => {
  updateEntry("charcount" , values ? values.replace( /(<([^>]+)>)/ig, '').length : 0)
  }
  const handleDelete = async (id) => {
    await axios.delete('/api/entries/' + id);
    navigate("/entries")
    console.log("Deleting Entry ID: ", id);
  }

  const activeButtonClass = 'p-3 rounded-full hover:bg-gray-200 transition duration-150 ease-in-out bg-primary'
  const inactiveButtonClass = 'p-3 rounded-full hover:bg-gray-200 transition duration-150 ease-in-out'


  // Updates existing entry record
  // or creates new entry record
  const save = () => {
    console.log("State: ", newEntry);
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

    <section class='w-full h-full flex'>

      {/* Text Editor Section */}
      <section className="flex flex-col intems-ceter px-5 py-10 h-screen w-2/3">
        <TinyMCE updateEntry={updateEntry} existingValues={props.entry} updateCount={updateCharCount} newEntry={newEntry}/>
      </section>

      {/* Form Option Settings */}
      <section className="flex flex-col intems-ceter px-5 py-10 h-screen w-1/3">
        <label className="mb-2 tracking-wide">Journal Entry Title</label>
        <input 
          type="text" 
          placeholder="Entry Title"
          value={newEntry.title} 
          onChange={(event) => updateEntry("title", event.target.value)}
          className="input input-bordered w-full mb-2"
          required
        />
        <label className="mb-2 tracking-wide">Date</label>
        <input 
          type="date" 
          defaultValue={defaultDateValue}
          value={newEntry.date}  
          onChange={(event) => updateEntry("date", event.target.value)}
          className="input input-bordered w-full mb-2" 
        />
        <label className="mb-2 tracking-wide">Journal Visibility</label>
        <select 
          className="select select-bordered w-auto mb-2" 
          name="private" 
          id="private"  
          value={newEntry.private}  
          onChange={(event) => updateEntry("private", event.target.value)}>
            <option disabled selected>Entry Visibilty</option>
            <option value={true}>Private</option>
            <option value={false}>Public</option>
        </select>
        <label className="mt-3 mb-2 tracking-wide">Are you Journaling about a specific language?</label>
        <div className="flex w-full justify-between">
          <button 
            className={newEntry.language === 1 ? activeButtonClass : inactiveButtonClass}
            onClick={() => updateEntry("language", 1)}>
            <IoLogoJavascript size={30}/>
          </button>
          <button 
            className={newEntry.language === 2 ? activeButtonClass : inactiveButtonClass}
            onClick={() => updateEntry("language", 2)}>
            <IoLogoPython size={30}/>
          </button>
          <button 
            className={newEntry.language === 3 ? activeButtonClass : inactiveButtonClass}
            onClick={() => updateEntry("language", 3)}>
            <FaJava size={30}/>
          </button>
          <button 
            className={newEntry.language === 4 ? activeButtonClass : inactiveButtonClass}
            onClick={() => updateEntry("language", 4)}>
            <DiPhp size={30}/>
          </button>
          <button 
            className={newEntry.language === 5 ? activeButtonClass : inactiveButtonClass}
            onClick={() => updateEntry("language", 5)}>
            <DiRubyRough size={30}/>
          </button>
          <button 
            className={newEntry.language === 6 ? activeButtonClass : inactiveButtonClass}
            onClick={() => updateEntry("language", 6)}>
            <DiCss3 size={30}/>
          </button>
          <button 
            className={newEntry.language === 7 ? activeButtonClass : inactiveButtonClass}
            onClick={() => updateEntry("language", 7)}>
            <DiHtml5 size={30}/>
          </button>
          <button 
            className={newEntry.language === 8 ? activeButtonClass : inactiveButtonClass}
            onClick={() => updateEntry("language", 8)}>
            <SiTypescript size={30}/>
          </button>
        </div>
        <label className="mt-3 mb-2 tracking-wide">Are you Journaling about a specific framework?</label>
        <div className="flex w-full justify-between">
          <button 
              className={newEntry.framework === 1 ? activeButtonClass : inactiveButtonClass}
              onClick={() => updateEntry("framework", 1)}>
              <DiReact size={30}/>
          </button>
          <button 
              className={newEntry.framework === 2 ? activeButtonClass : inactiveButtonClass}
              onClick={() => updateEntry("framework", 2)}>
              <DiAngularSimple size={30}/>
          </button>
          <button 
              className={newEntry.framework === 3 ? activeButtonClass : inactiveButtonClass}
              onClick={() => updateEntry("framework", 3)}>
              <FaVuejs size={30}/>
          </button>
          <button 
              className={newEntry.framework === 4 ? activeButtonClass : inactiveButtonClass}
              onClick={() => updateEntry("framework", 4)}>
              <SiRubyonrails size={30}/>
          </button>
          <button 
              className={newEntry.framework === 5 ? activeButtonClass : inactiveButtonClass}
              onClick={() => updateEntry("framework", 5)}>
              <SiNextdotjs size={30}/>
          </button>
          <button 
              className={newEntry.framework === 6 ? activeButtonClass : inactiveButtonClass}
              onClick={() => updateEntry("framework", 6)}>
              <SiExpress size={30}/>
          </button>
          <button 
              className={newEntry.framework === 7 ? activeButtonClass : inactiveButtonClass}
              onClick={() => updateEntry("framework", 7)}>
              <FaLaravel size={30}/>
          </button>
          <button 
              className={newEntry.framework === 8 ? activeButtonClass : inactiveButtonClass}
              onClick={() => updateEntry("framework", 8)}>
              <SiDjango size={30}/>
          </button>
          <button 
              className={newEntry.framework === 9 ? activeButtonClass : inactiveButtonClass}
              onClick={() => updateEntry("framework", 9)}>
              <SiSvelte size={30}/>
          </button>
          <button 
              className={newEntry.framework === 10 ? activeButtonClass : inactiveButtonClass}
              onClick={() => updateEntry("framework", 10)}>
              <SiKotlin size={30}/>
          </button>
        </div>
        <label className="mb-2 mt-3 tracking-wide">Hours spent studying</label>
        <select 
          className="select select-bordered w-auto"
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
        <label className="mb-2 mt-3 tracking-wide">Additional notes</label>
        <textarea 
          type="text"
          placeholder="Additional Notes" 
          className="textarea textarea-bordered" 
          rows={6}
          value={newEntry.notes}
          onChange={(event) => updateEntry("notes", event.target.value)}
        />
        <button onClick={save} className='btn btn-primary w-full mt-3'>Save journal Entry</button>
        <DeleteEntry
          key={props.id}
          id={props.id}
          handleDelete={handleDelete}
        />
        {props.id ? 
          <label htmlFor={'my-modal-' + props.id}  className="btn btn-ghost w-full mt-2 flex gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            <p>Delete Entry</p>
          </label> : null}
      </section>

    </section>
  )
}

export default EntryForm2;