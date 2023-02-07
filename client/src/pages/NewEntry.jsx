import React from "react";
import { Outlet } from "react-router";
import  { useState, useEffect } from 'react';
import axios from  'axios';
import { useNavigate } from "react-router-dom";

function NewEntry() {
  const navigate = useNavigate();
  const [newEntry, setnewEntry] = useState({
   title: "",
   date: "",
   entry:"",
hours: "",
   language:"",
  framework:"",
  notes:""


  });
  
const save = () => {

  axios.post('/api/entries', 
    newEntry
  
  )
  .then(function (response) {
    navigate("/entriesfeed")
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

const updateEntry = (key,value) => {
  setnewEntry((prev) =>{
return {... prev, [key]:value}
  })
}
  return (
    <div data-theme="emerald"className="lg:justify-center lg:align-middle lg:flex  ">
    <form className="w-[100vw]" onSubmit={((event) =>{
      event.preventDefault()
      save()

    })}>
      <div className="flex">
        <div className="flex gap-2 w-3/4 p-4 bg-gray-500 text-white">
          <h3>Title</h3>
          <input className="w-full text-black " value={newEntry.title
          }  onChange={(event) => updateEntry("title", event.target.value)}></input>
        </div>
        <div className="flex gap-2 w-1/4 p-4 bg-gray-500 text-white">
          <h3>Date</h3>
          <input className="w-full text-black" value={newEntry.date
          }  onChange={(event) => updateEntry("date", event.target.value)}></input>
        </div>
      </div>
      <div className="flex">
        <div className=" gap-2 w-full p-4 bg-gray-500" >
          <h3 className="text-white">Entry</h3>
          <textarea
            rows="5"
            className="w-full text-black border p-4 border-black"
            value={newEntry.entry
            }  onChange={(event) => updateEntry("entry", event.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="flex">
        <div className="flex justify-between gap-2 w-full p-4 bg-gray-500 ">
          <h3 className="text-white">Hours spent studying</h3>
          <select className="text-black w-1/4" name="hours" id="hours"  value={newEntry.hours}  onChange={(event) => updateEntry("hours", event.target.value)}>
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4 hours</option>
          </select>
        </div>
      </div>
      <div className="flex">
        <div className=" gap-2 w-1/4 p-4 bg-gray-600 text-white">
          <h3>Language</h3>
          <select className="text-black w-full" name="cars" id="cars"  value={newEntry.language
          }  onChange={(event) => updateEntry("language", event.target.value)}>
            <option value="1">Javascript</option>
            <option value="2">Python</option>
            <option value="3">Java</option>
           
          </select>
        </div>
        <div className=" gap-2 w-1/4 p-4 bg-gray-600 text-white">
          <h3>Framework</h3>
          <select className="text-black w-full" name="cars" id="cars"  value={newEntry.framework
          }  onChange={(event) => updateEntry("framework", event.target.value)}>
            <option value="1"> React</option>
            <option value="2">Django</option>
            <option value="3"> Kotlin</option>
           
          </select>
        </div>
        <div className=" gap-2 w-1/2 p-4 bg-gray-600 text-white">
          <h3>Notes</h3>
          <textarea
            rows="2"
            className="w-full text-black border p-4 border-black"
            value={newEntry.notes
            }  onChange={(event) => updateEntry("notes", event.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-between">
        <div></div>
        <div className="bg-gray-400 text-black my-3 absolute bottom-100 right-90">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded  ">Save</button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default NewEntry;