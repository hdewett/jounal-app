import React from "react";
import { Outlet } from "react-router";

function NewEntry() {
  return (
    <div data-theme="emerald"className="lg:justify-center lg:align-middle lg:flex  ">
    <form className="w-[100vw]">
      <div className="flex">
        <div className="flex gap-2 w-3/4 p-4 bg-gray-500 text-white">
          <h3>Title</h3>
          <input className="w-full text-black " ></input>
        </div>
        <div className="flex gap-2 w-1/4 p-4 bg-gray-500 text-white">
          <h3>Date</h3>
          <input className="w-full text-black"></input>
        </div>
      </div>
      <div className="flex">
        <div className=" gap-2 w-full p-4 bg-gray-700">
          <h3 className="text-white">Entry</h3>
          <textarea
            rows="5"
            className="w-full text-black border p-4 border-black"
          ></textarea>
        </div>
      </div>
      <div className="flex">
        <div className="flex justify-between gap-2 w-full p-4 bg-gray-700">
          <h3 className="text-white">Hours spent studying</h3>
          <select className="text-black w-1/4" name="cars" id="cars">
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4 hours</option>
          </select>
        </div>
      </div>
      <div className="flex">
        <div className=" gap-2 w-1/4 p-4 bg-gray-800 text-white">
          <h3>Language</h3>
          <select className="text-black w-full" name="cars" id="cars">
            <option value="1">Javascript</option>
            <option value="2">Python</option>
            <option value="3">Java</option>
           
          </select>
        </div>
        <div className=" gap-2 w-1/4 p-4 bg-gray-800 text-white">
          <h3>Framework</h3>
          <select className="text-black w-full" name="cars" id="cars">
            <option value="1"> React</option>
            <option value="2">Django</option>
            <option value="3"> Kotlin</option>
           
          </select>
        </div>
        <div className=" gap-2 w-1/2 p-4 bg-gray-800 text-white">
          <h3>Notes</h3>
          <textarea
            rows="2"
            className="w-full text-black border p-4 border-black"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-between">
        <div></div>
        <div className="bg-gray-400 text-black my-3">
          <h2 className="px-5 py-3">Save</h2>
        </div>
      </div>
    </form>
  </div>
  )
}

export default NewEntry;