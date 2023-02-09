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
      
      <main class="flex h-full w-full flex-col ">
  <div class="flex h-auto">
  <article className="prose lg:prose-lg">
    <div className="flex justify-end">
    <span className="flex font-medium">{viewEntry.date}</span>
    </div>
    <h1>{viewEntry.title}</h1>


        <p>
        {viewEntry.entry}
        </p>
    <Outlet />
    </article>

    <section class="flex h-96 w-24 items-center justify-center"></section>

    <div className="overflow-x-auto">
  <table className="table w-3/4">
  {/* <!-- head --> */}
  <tbody>
    {/* <!-- row 1 --> */}
    <tr>
      <th className="bg-base-200">Hours</th>
      <td className="border border-bg-200">{viewEntry.hours}</td>
    </tr>

    <tr>
      <th className="bg-base-200">Language</th>
      <td className="border border-bg-200">{viewEntry.language}</td>
    </tr>

    <tr>
      <th className="bg-base-200">Framework</th>
      <td className="border border-bg-200">{viewEntry.framework}</td>
    </tr>

    <tr>
      <th className="bg-base-200">Notes</th>
      <td className="border border-bg-200">{viewEntry.notes}</td>
    </tr>
    
    </tbody>
</table>
</div>
  </div>
</main>



    

  </div>

  )
}

export default ViewEntry;