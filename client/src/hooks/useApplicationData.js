/*
*
* useApplicationData.js - Custom hook to manage state for the application.
*
*/

import { useState, useEffect } from "react";
import axios from 'axios';


export default function useApplicationData() {


  const [state, setState] = useState({
    entries: {}
  });

  // Initialize state
  useEffect(() => {
    Promise.all([
      axios.get('/api/entries'),
    ]).then((all) => {
      const [entriesData] = all;
      setState(prev => { return {
        ...prev,
        entries: entriesData.data,
      }});
    });
  }, []);

  // Set entries state
  const setEntries = entries => setState({...state, entries});

  return { state, setEntries }
}