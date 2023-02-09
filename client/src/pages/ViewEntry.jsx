import React, {useState, useEffect} from "react";
import { Outlet } from "react-router";
import axios from "axios";
import { useParams } from "react-router";


function ViewEntry(props) {
  console.log("View Entry Page")
  const [entriesData, setEntryData] = useState([]);
  // Pull id
  const { id } = useParams();
  const entriesUrl = "/api/viewentry/"+ id ;
  
  useEffect(() => {
    getEntriesDataWithAxios();
  }, []);
  // Request specific row of data from db
  const getEntriesDataWithAxios = async () => {
    // console.log("get entry text")
    const response = await axios.get(entriesUrl);
    // console.log("response.data",response.data);
    setEntryData(response.data);
    // console.log(response.data)
  };


  const viewEntry = {
    title: entriesData.title,
    date: entriesData.date,
    entry: entriesData.entry,
    hours: entriesData.hours,
    language: entriesData.language_name,
    framework: entriesData.framework_name,
    notes:entriesData.notes
  }; 

  console.log("viewEntry", viewEntry);
  return (
    <div className="my-6 mx-20">
    <div className="overflow-x-auto">
  <table className="table w-3/4 border border-base-200">
  {/* <!-- head --> */}
  <thead>
    <tr>
      <th>Hours</th>
      <th>Language</th>
      <th>Framework</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    {/* <!-- row 1 --> */}
    <tr>
      <th>{viewEntry.hours}</th>
      <td>{viewEntry.language}</td>
      <td>{viewEntry.framework}</td>
      <td>{viewEntry.notes}</td>
    </tr>
    </tbody>
</table>
</div>

    <article className="prose lg:prose-lg">
    <div className="flex justify-end">
    <span className="flex">{viewEntry.date}</span>
    </div>
    <h1>{viewEntry.title}</h1>


        <p>
        {viewEntry.entry}
        </p>
    <Outlet />
    </article>
  </div>

  )
}

export default ViewEntry;